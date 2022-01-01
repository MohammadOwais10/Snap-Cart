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
     
        const CartItem=(props)=>{
        const { price, title, qty } = props.product;
        const { product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return (
            <div className="cart-item">
            <div className="left-block">
              <img style={styles.image} src={product.img} />
            </div>
                <div className="right-block">
                    <div style={{fontSize:25 }}>{title}</div>
                    <div style={{color: '#777' }}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/128/3114/premium/3114824.png?token=exp=1641022478~hmac=37c5f71a2d817b511ba8a3b4a2a61ae8"
                        onClick={()=>onIncreaseQuantity(product)}
                       // /*first way to bind*/ onClick={this.increaseQuantity.bind(this)}
                        />
                        <img alt="dcrease" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/128/2569/premium/2569198.png?token=exp=1641022541~hmac=5788bab08f89e08e01d38dc71f055d35"
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/128/6096/premium/6096937.png?token=exp=1641022579~hmac=30bbf717530d20e144d3cc9b61551b67"
                        onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;