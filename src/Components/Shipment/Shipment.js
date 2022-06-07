import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import swal from 'sweetalert';
const Shipment = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        swal({
            title: "Thanks For Your Order",
            text: "Your Order is successfully Placed",
            icon: "success",
            button: "ok",
          });
    };

 
    return (

        <div className="container">
            <h3 className="text-center">Please Complete your order by filling up this form</h3>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

                <input   {...register("name", { required: true })} placeholder="Enter Your name" />
                {errors.name && <span className="error  r">Name is required</span>}

                <input   {...register("email", { required: true })} placeholder="Enter your email" />
                {errors.email && <span className="error">Email is required</span>}

                <input   {...register("address", { required: true })} placeholder="Your Address" />
                {errors.address && <span className="error">Addressr is required</span>}
                <input   {...register("phone", { required: true })} placeholder="Your Phone Number" />
                {errors.phone && <span className="error">Phone Number is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipment;