import React, { useEffect, useState } from 'react';

import './Home.css'
import Card from './Card';

const Home = () => {

    let [data, SetData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/total`)

            .then(res => res.json())
            .then(data => SetData(data))
            .catch(err => {
                console.log(err);
            })


    }, [])



    return (
        <div className=''>
            <div className='w-full h-screen'>

                <div className=' border-2 h-[600px] mt-5 img w-11/12 mx-auto'>

                    z
                </div>
            </div>

            <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 gap-5'>

                {
                    data.map(res => <Card

                        key={res._id}
                        data={res}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Home;