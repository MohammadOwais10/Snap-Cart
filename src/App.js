import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase/app";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  // componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection("products")
  //     .get()
  //     .then(snapshot => {
  //       const products = snapshot.docs.map(doc => {
  //         const data = doc.data();
  //         data["id"] = doc.id;
  //         return data;
  //       });
  //       this.setState({ products: products, loading: false });
  //     });
  // }
  componentDidMount() {
    this.db
      .collection("products")
      // .where("price", "==", 999) /*this for filter the value according to price or name*/
      // .where("title", "==", "Mug")
      .orderBy("price", "desc")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  handleIncreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty+=1;
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection("products").doc(products[index].id);

    docRef
      .update({ qty: products[index].qty + 1 })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDecreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    //     products[index].qty -=1;
    //     this.setState({
    //         products
    //     })
    // }
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({ qty: products[index].qty - 1 })
      .then(() => {
        console.log("Document updated sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Deleted sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
    // const items=products.filter((item)=>item.id !== id);
    // this.setState({
    //   products:items
    // })
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection("products")

      .add({
        img: "https://images.unsplash.com/photo-1543582890-139a4ff9946e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 90000,
        qty: 3,
        title: "Iphone",
      })
      .then((docRef) => {
        docRef.get().then((snapshot) => {
          console.log("Product has been added", snapshot.data());
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div
          style={{
            padding: 20,
            fontSize: 25,
            backgroundColor: "gold",
            textAlign: "center",
          }}
        >
          TOTAL : &#8377;{this.getCartTotal()}{" "}
        </div>
        <div className="addbtn">
          <button onClick={this.addProduct}>Add Product</button>
        </div>
      </div>
    );
  }
}

export default App;
