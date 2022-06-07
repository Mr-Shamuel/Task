import React from 'react';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Cart = ({ cart }) => {
    console.log(cart);
    const total = cart.reduce((total, element) => total + parseInt(element.price), 0);
    const tax = Math.round(total / 30);
    const Total_order = total + tax;
    console.log(total);


    let history = useHistory()
    const handlePay = (bedType) => {
        history.push(`/shipment`);
    }
    return (
        <div className=" cart_">
            <div className="borde ">
                <h4>Order Details</h4>
                <h6>Items Ordered : <ShoppingCartIcon className=" text-warning"></ShoppingCartIcon>{cart.length}</h6>
                <p>Procuct Price  : ${total}</p>
                <p>Tax + Vat : ${tax}</p>
                <h6>Total Order  : ${Total_order}</h6>
                <button className="btn btn-danger fw-bold" onClick={handlePay}>Proceed to Pay</button>
            </div>

        </div>
    );
};

export default Cart;