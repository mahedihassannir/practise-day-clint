import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    let data = useLoaderData()

    let { title, img, price, service_id } = data

    let handleCheckOut = (e) => {

        e.preventDefault()

        let from = e.target

        let name = from.name.value
        let mobile = from.mobile.value
        let email = from.email.value

        let totalValue = { name, mobile, email, service_id, title, img, price }

        console.log(totalValue);

        fetch(`http://localhost:5000/checkout`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(totalValue)

        })
            .then(res => res.json())
            .then(err => {
                console.log(err);
            })

    }


    return (
        <div className='w-full h-screen flex'>

            <div className='ml-10 mt-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$$: {price}</h2>
                        <p>{title}</p>

                    </div>
                </div>
            </div>

            {/* here is the check out form */}

            <div className=' ml-10 mt-10 w-1/2'>

                <form onSubmit={handleCheckOut} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">mobile</span>
                        </label>
                        <input type="text" required name='mobile' placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">email</span>
                        </label>
                        <input type="email" required name='email' placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">checkout</button>
                    </div>
                </form>


            </div>

        </div>
    );
};

export default Checkout;