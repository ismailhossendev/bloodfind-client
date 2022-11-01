import React from 'react';
import { Link } from 'react-router-dom';

const Delete = () => {
    const handleDelete = (e) =>{
        e.preventDefault();
        const form = e.target;
        const phone = form.number.value;
        const id = form.id.value;
        const agree = window.confirm('are you sure?')
        if(!agree)return

        fetch(`http://bloodfind-server.vercel.app/delete/${id}/${phone}`,{
            method:'delete',
        })
        .then(res => res.json())
        .then(data =>{
            alert(data.message)
        })

    }
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100 mx-auto my-10" >
            <div className="mb-8 text-center" >
                <h1 className="my-3 text-4xl font-bold">Delete A Donor</h1>
                <p className='text-red-500'>Note: This Option For temporary...</p>
            </div>
            <form onSubmit={handleDelete} className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4" >
                    <div >
                        <label for="number" className="block mb-2 text-sm">Phone Number *</label>
                        <input type="number" name="number" id="number" placeholder="0177**77**77**" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                    </div>
                    <div >
                        <div className="flex justify-between mb-2" >
                            <label for="id" className="text-sm">Enter Donator Id *</label>
                        </div>
                        <input type="text" name="id" id="id" placeholder="Please Contact Admin For Id" className=" w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-800 text-gray-100 " required/>
                    </div>
                </div>
                <div className="space-y-2" >
                    <div >
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Delete</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-400">Don't Registered Donor?
                        <Link to='/register/donor' className="hover:underline text-violet-400">Register Donor</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Delete;