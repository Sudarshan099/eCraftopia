import React, { useState } from 'react';
import BannerImg from "../assest/Nepal.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.password) tempErrors.password = "Password is required";
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            alert("Login successfully");
            // handle form submission
        }
    };

    const navigate = useNavigate();

    const handleSignClick = () => {
        navigate('/signup');
    };
    // min-h-screen  hover:drop-shadow-xl
    return (
        <div className="flex items-center justify-center bg-[#faefd6] min-h-screen p-4">
            <div className="flex flex-col md:flex-row shadow-[#6d325c] shadow-xl hover:drop-shadow-2xl rounded-lg overflow-hidden bg-[#fadcd5] w-full max-w-4xl">
                <div className="w-full md:w-1/2 bg-gray-800 flex items-center justify-center">
                    <img src={BannerImg} alt="Banner" className="h-full w-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Log In to <strong className='text-3xl md:text-4xl font-bold my-4' style={{ fontFamily: 'cursive', textDecoration: 'none' }}>Craftopia</strong></h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter your Email.'
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <button type="submit" className="w-full mb-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-[#011222] transition duration-300"
                            onClick={handleSubmit}>
                            LOG IN
                        </button>

                        <hr className='bg-gray-500 w-full h-[2px]' />
                    </form>
                    <p className='mt-5 text-center'>Create an account. <strong className='text-red-400 text-lg ml-1 cursor-pointer' onClick={handleSignClick}>SIGN UP</strong> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;