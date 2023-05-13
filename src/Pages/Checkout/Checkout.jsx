import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const useLoader = useLoaderData()
    console.log(useLoader);
    const { price, service_id, title, _id } = useLoader;

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;

        const fName = form.fName.value;
        const lName = form.lName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const text = form.text.value;

        console.log(fName, lName, phone, email, text);

    }

    return (
        <div className='container mx-auto p-28'>
            <form onSubmit={handleCheckOut}>
                <div className="card-body grid grid-cols-2 gap-10">
                    <div className="form-control">
                        <input type="text" name='fName' placeholder="First Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='lName' placeholder="Last Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="number" name='phone' placeholder="Your Phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" />
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

export default Checkout;