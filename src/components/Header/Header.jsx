import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className="relative">
            {/* Navbar */}
            <Navbar />

            {/* Background image and search form */}
            <div className="relative h-[calc(100vh-64px)]"> {/* Adjust 64px if your Navbar height is different */}
                <img
                    src="https://as1.ftcdn.net/v2/jpg/04/88/08/68/1000_F_488086891_nY0z5ZQN0nLkta42Ziv6kHehHlBclQyq.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />

                {/* Search form overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <form className="w-full max-w-4xl px-4">
                        <div className="flex flex-wrap items-center gap-4">
                            <input
                                className="flex-grow appearance-none bg-white bg-opacity-20 border border-gray-300 rounded-lg text-white py-2 px-4 leading-tight focus:outline-none focus:bg-opacity-30 focus:border-green-500 transition duration-300"
                                type="text"
                                placeholder="Nhập từ khóa tìm kiếm..."
                            />
                            <button
                                type="button"
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center"
                            >
                                <span>Chọn khu vực</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <button
                                type="button"
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center"
                            >
                                <span>Chọn ngành nghề</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;
