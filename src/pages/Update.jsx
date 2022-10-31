import React from 'react';
import { Link } from 'react-router-dom';

const Update = () => {
    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const phone = form.number.value;
        const date = form.date.value;
        fetch('http://localhost:5000/update',{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({phone,date})
        })
        .then(res => res.json())
        .then(data =>{
            alert(data.message)
        })
    }
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100 mx-auto my-10" >
            <div className="mb-8 text-center" >
                <h1 className="my-3 text-4xl font-bold">Update Blood Donation Time</h1>
            </div>
            <form onSubmit={handleUpdate} className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4" >
                    <div >
                        <label for="number" className="block mb-2 text-sm">Phone Number *</label>
                        <input type="number" name="number" id="number" placeholder="0177**77**77**" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                    </div>
                    <div >
                        <div className="flex justify-between mb-2" >
                            <label for="date" className="text-sm">New Donation Date *</label>
                        </div>
                        <input type="date" name="date" id="date" placeholder="*****" className=" w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-800 text-gray-100 " required/>
                    </div>
                </div>
                <div className="space-y-2" >
                    <div >
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Update</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-400">Don't Registered Donor?
                        <Link to='/register/donor' className="hover:underline text-violet-400">Register Donor</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Update;