import React, {useState} from "react";

function Component(){
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState();
    const [comment, setComment] = useState();
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        if(event.target.value >= 0){
        setQuantity(event.target.value);
        }
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }


    return(
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name : {name}</p>
            <input value={quantity} type="number" onChange={handleQuantityChange}></input>
            <p>Quantity : {quantity}</p>
            <textarea value={comment} placeholder="Enter Comment" onChange={handleCommentChange}></textarea> <br></br>
            <p>Comment : {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="" >Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value= "PayPal">PayPal</option>
            </select>

            <p>Payment : {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"} onChange={handleShippingChange}/>Pick Up    
            </label><br/>

            <label>
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"} onChange={handleShippingChange}/>Delivery  
            </label>

            <p>Shipping : {shipping}</p>
            
        </div>
    );
}

export default Component