import React, { useState } from 'react';
import BannerImg from "../assest/Nepal.png";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = e => {
        alert("Submiited");
    };

    const navigate = useNavigate();

    const handleLogClick = () => {
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center bg-[#faefd6] min-h-screen p-4">
            <div className="flex flex-col md:flex-row shadow-[#6d325c] shadow-xl hover:drop-shadow-2xl rounded-lg overflow-hidden bg-[#fadcd5] w-full max-w-4xl">
                <div className="w-full md:w-1/2 bg-gray-800 flex items-center justify-center">
                    <img src={BannerImg} alt="Banner" className="object-cover h-full w-full" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Register to <strong className='text-3xl md:text-4xl font-bold my-4' style={{ fontFamily: 'cursive', textDecoration: 'none' }}>Craftopia</strong></h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder='Enter your username.'
                                value={formData.username}
                                onChange={handleChange}
                                className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter your email.'
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Enter your password.'
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                        </div>
                        <button type="submit" className="w-full mb-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-[#011222] transition duration-300">
                            SIGN UP
                        </button>
                        <hr className='bg-gray-500 w-full h-[2px]' />
                    </form>
                    <p className='mt-5 text-center'>Already have an account? <strong className='text-red-400 text-lg ml-1 cursor-pointer' onClick={handleLogClick}>Log In</strong> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;