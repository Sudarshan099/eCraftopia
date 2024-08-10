import React from 'react';
import ProductList from './ProductList';
import BannerImg from "../assest/Nepal2.png";

const Home = () => {
    return (
        <div>
            <div
                className="p-7 pt-28 bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${BannerImg})`,
                    height: '300px'
                }}
            >
                <div className="text-white p-4 rounded-lg bg-[#203a53]/70 blur w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <h1
                        className="text-5xl font-bold text-center my-4"
                        style={{
                            fontFamily: 'cursive',
                            textDecoration: 'none'
                        }}
                    >
                        Welcome to Craftopia
                    </h1>
                </div>
                <h1
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white font-bold text-center my-4"
                    style={{
                        fontFamily: 'cursive',
                        textDecoration: 'none'
                    }}
                >
                    Welcome to Craftopia
                </h1>
            </div>

            {/* <ProductList /> */}
        </div>
    );
};

export default Home;
