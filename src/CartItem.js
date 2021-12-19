import React from "react";

class CartItem extends React.Component{
    constructor () {
        super ();
        this.state={
            price:990,
            title:'Mobile',
            qty :1,
            img: ' '
        }
        // /*second way to bind*/ this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity =()=> {    /*  finaly way to bind by arrow =()=>  */
       //console.log('test',this.state);
        // 1st ways--> setState increase qty
        // this.setState({
        //     qty:this.state.qty +1
        // });
         // 2nd ways--> setState increase qty ----if prevState required use this way
        this.setState((prevState)=>{
            return{
            qty:prevState.qty +1
            }
        });  
    }

    decreaseQuantity =()=> {
        const { qty }=this.state;
        if(qty===0){
            return;
        }
         this.setState((prevState)=>{
             return{
             qty:prevState.qty -1
             }
         });  
     }
     
    render () {
        const { price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={imgStyles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25 }}>{title}</div>
                    <div style={{color: '#777' }}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/512/1377/premium/1377215.png?token=exp=1639725866~hmac=7d80d3de00920e74cf63449c4ce2b77c"
                        onClick={this.increaseQuantity}
                        // /*first way to bind*/ onClick={this.increaseQuantity.bind(this)}
                        />
                        <img alt="dcrease" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/512/3876/premium/3876054.png?token=exp=1639725735~hmac=4293342cbd31e36c35a8ddd7eb1ba1bc"
                        onClick={this.decreaseQuantity}
                        />
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1639725936~hmac=6bf5f80081951e1f4ca3a147a82d6e94"/>
                    </div>
                </div>
            </div>
        );
    }
}

const imgStyles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;