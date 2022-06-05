import React from "react";

//class CartItem extends React.Component{
// constructor () {
//     super ();
//     this.state={
//         price:990,
//         title:'Mobile',
//         qty :1,
//         img: ' '
//     }
// /*second way to bind*/ this.increaseQuantity=this.increaseQuantity.bind(this);
// }
//  increaseQuantity =()=> {    /*  finaly way to bind by arrow =()=>  */
//console.log('test',this.state);
// 1st ways--> setState increase qty
// this.setState({
//     qty:this.state.qty +1
// });
// 2nd ways--> setState increase qty ----if prevState required use this way
//     this.setState((prevState)=>{
//         return{
//         qty:prevState.qty +1
//         }
//     });
// }

// decreaseQuantity =()=> {
//     const { qty }=this.state;
//     if(qty===0){
//         return;
//     }
//      this.setState((prevState)=>{
//          return{
//          qty:prevState.qty -1
//          }
//     } );
// }

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        {/* <img style={styles.image} src={product.img} /> */}
        <img src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "grey", fontWeight: "bolder" }}>Rs {price}</div>
        <div style={{ color: "#777", fontWeight: "bolder" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/*Buttons*/}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
            onClick={() => onIncreaseQuantity(product)}
            // /*first way to bind*/ onClick={this.increaseQuantity.bind(this)}
          />
          <i class="fa-solid fa-minus"></i>
          <img
            alt="dcrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/561/561240.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/3963/3963933.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

// const styles = {
//   image: {
//     height: 200,
//     width: 200,
//     borderRadius: 4,
//     background: "#ccc",
//   },
// };

export default CartItem;
