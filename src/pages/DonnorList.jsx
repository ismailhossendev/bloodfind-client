import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DonorList = () => {
    const donors = useLoaderData();
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100" bis_skin_checked="1">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Donors</h2>
            <div className="overflow-x-auto" bis_skin_checked="1">
                <table className="w-full p-6 text-xl text-left whitespace-nowrap">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Blood Group</th>
                            <th className="p-3">WhatsApp</th>
                            <th className="p-3">District</th>
                            <th className="p-3">Area Or Hospital</th>
                        </tr>
                    </thead>
                    {
                        donors.map(d => <tbody className="border-b bg-gray-900 border-gray-700">
                        <tr>
                            <td className="px-3 py-2">
                                <p>{d.name ? d.name :'Not Interest To share Name' }</p>
                            </td>
                            <td className="px-3 py-2">
                                <p className="text-gray-400">{d.email ? d.email : 'Email Not available'}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p>{d.phone}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p>{d.bloodGroup}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p>{d.WhatsApp}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p className="text-gray-400">{d.district}</p>
                            </td>
                            <td className="px-3 py-2">
                                <p>{d.area}</p>
                            </td>
                        </tr>
                    </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default DonorList;