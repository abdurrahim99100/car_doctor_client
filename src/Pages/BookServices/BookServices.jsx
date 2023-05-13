import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const BookServices = () => {
    const useLoader = useLoaderData()
    const {user} = useContext(AuthContext);

    console.log(useLoader);
    const { price, service_id, title, _id } = useLoader;


    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = form.email.value;
        const text = form.text.value;


        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }
        console.log(order);

    }   
    return (
        <div className='container mx-auto p-28'>
            <form onSubmit={handleCheckOut}>
                <div className="card-body grid grid-cols-2 gap-10">
                    <div className="form-control">
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='price' defaultValue={"$ " + price} placeholder="Your Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' defaultValue={user.email} placeholder="Your Email" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control card-body">
                    <input type="text" name='text' placeholder="Your Message" className="input input-bordered h-48" />
                </div>
                <div className="form-control card-body">
                    <button className="btn btn-primary">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default BookServices;