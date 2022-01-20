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
                    <div style={{color: 'white',fontWeight:'bolder' }}>Rs {price}</div>
                    <div style={{color: '#777',fontWeight:'bolder'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/512/3876/premium/3876052.png?token=exp=1642699762~hmac=3db1973cd69a29928792c5a3d0c6d52e"
                        onClick={()=>onIncreaseQuantity(product)}
                       // /*first way to bind*/ onClick={this.increaseQuantity.bind(this)}
                        />
                        <img alt="dcrease" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/512/3876/premium/3876054.png?token=exp=1642699645~hmac=d9acf55b8557c922a36c1126543c07ae"
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/512/6096/premium/6096937.png?token=exp=1642699792~hmac=0d6773481e0180dbe26c696c09ff1c00"
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