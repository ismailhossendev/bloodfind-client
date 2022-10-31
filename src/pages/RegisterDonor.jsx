import React from 'react';

const RegisterDonor = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const WhatsApp = form.WhatsApp.value;
        const district = form.district.value;
        const area = form.area.value
        const bloodGroup = form.blood.value
        const lastDonate = form.lastDonate.value
        if (!(bloodGroup)) {
            alert('All * are Required')
            return
        }
        const info = { name, email, phone, WhatsApp, district, area, bloodGroup, lastDonate };
        fetch('http://localhost:5000/donor/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.name + "Thanks For Register")
            })
    }
    return (
        <div className='w-11/12 mx-auto my-4'>
            <div className="md:w-3/6 mx-auto my-auto">
                <form onSubmit={handleSubmit} className='space-y-4 border border-black p-10 bg-gray-900 rounded-xl text-white'>
                    <div className="md:flex gap-2 justify-around">
                        <div className='w-full'>
                            <label htmlFor="name" className="block mb-2 text-sm">Full Name *</label>
                            <input type="text" name="name" id="name" placeholder="john Sumit" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                    </div>
                    <div className="md:flex justify-around gap-2">
                        <div className='w-full'>
                            <label htmlFor="phone" className="block mb-2 text-sm">Phone Number* (Need for Update Donation Time)</label>
                            <input type="number" name="phone" id="phone" placeholder="john Sumit" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="WhatsApp" className="block mb-2 text-sm">WhatsApp</label>
                            <input type="text" name="WhatsApp" id="WhatsApp" placeholder="01700**0010" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                    </div>
                    <div className="md:flex justify-around gap-2">
                        <div className='w-full'>
                            <label className="block mb-2 text-sm">District *</label>
                            <select name="district" className="w-full px-3 py-3 border rounded-md border-gray-700 bg-gray-900 text-gray-100">
                                <option value="" disabled selected={true} className='select-disabled'>Select District</option>
                                <option value="Patuakhali">Patuakhali</option>
                                <option value="Bagerhat">Bagerhat</option>
                                <option value="Bandarban">Bandarban</option>
                                <option value="Barguna">Barguna</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Bhola">Bhola</option>
                                <option value="Bogura">Bogura</option>
                                <option value="Brahmanbaria">Brahmanbaria</option>
                                <option value="Chandpur">Chandpur</option>
                                <option value="Chapainawabganj">Chapainawabganj</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Chuadanga">Chuadanga</option>
                                <option value="Comilla">Comilla</option>
                                <option value="Coxs">Coxs Bazar</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Dinajpur">Dinajpur</option>
                                <option value="Faridpur">Faridpur</option>
                                <option value="Feni">Feni</option>
                                <option value="Gaibandha">Gaibandha</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="Habiganj">Habiganj</option>
                                <option value="Jamalpur">Jamalpur</option>
                                <option value="Jessore">Jessore</option>
                                <option value="Jhalokati">Jhalokati</option>
                                <option value="Jhenaidah">Jhenaidah</option>
                                <option value="Joypurhat">Joypurhat</option>
                                <option value="Khagrachari">Khagrachari</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Kishoreganj">Kishoreganj</option>
                                <option value="Kurigram">Kurigram</option>
                                <option value="Kushtia">Kushtia</option>
                                <option value="Lakshmipur">Lakshmipur</option>
                                <option value="Lalmonirhat">Lalmonirhat</option>
                                <option value="Madaripur">Madaripur</option>
                                <option value="Magura">Magura</option>
                                <option value="Manikganj">Manikganj</option>
                                <option value="Maulvibazar">Maulvibazar</option>
                                <option value="Meherpur">Meherpur</option>
                                <option value="Munshiganj">Munshiganj</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Naogaon">Naogaon</option>
                                <option value="Narail">Narail</option>
                                <option value="Narayanganj">Narayanganj</option>
                                <option value="Narsingdi">Narsingdi</option>
                                <option value="Natore">Natore</option>
                                <option value="Netrokona">Netrokona</option>
                                <option value="Nilphamari">Nilphamari</option>
                                <option value="Noakhali">Noakhali</option>
                                <option value="Pabna">Pabna</option>
                                <option value="Panchagarh">Panchagarh</option>
                                <option value="Patuakhali">Patuakhali</option>
                                <option value="Pirojpur">Pirojpur</option>
                                <option value="Rajbari">Rajbari</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Rangamati">Rangamati</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Satkhira">Satkhira</option>
                                <option value="Shariatpur">Shariatpur</option>
                                <option value="Sherpur">Sherpur</option>
                                <option value="Sirajgonj">Sirajgonj</option>
                                <option value="Sunamganj">Sunamganj</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Tangail">Tangail</option>
                                <option value="Thakurgaon">Thakurgaon</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="area" className="block mb-2 text-sm">Area or Hospital</label>
                            <input type="text" name="area" id="area" placeholder="Example:Sodor area " className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                        </div>
                    </div>
                    <div className="md:flex justify-around gap-2">
                        <div className='w-full'>
                            <label className="block mb-2 text-sm">Blood Group *</label>
                            <select name='blood' className="w-full px-3 py-3 border rounded-md border-gray-700 bg-gray-900 text-gray-100">
                                <option value='' >Select Blood Group</option>
                                <option value="A+">A + (A POSITIVE)</option>
                                <option value="A-">A - (A NEGATIVE)</option>
                                <option value="B+">B + (B POSITIVE)</option>
                                <option value="B-">B - (B NEGATIVE)</option>
                                <option value="AB+">AB + (AB POSITIVE)</option>
                                <option value="AB-">AB - (AB NEGATIVE)</option>
                                <option value="O+">O + (O POSITIVE)</option>
                                <option value="O-">O - (O NEGATIVE)</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label htmlFor='lastDonate' className="block mb-2 text-sm">Last Donation Date</label>
                            <input type="date" name="lastDonate" id="lastDonate" placeholder="" defaultValue='' className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-400 text-gray-900" />
                        </div>
                    </div>
                    <button className='btn btn-warning' type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterDonor;