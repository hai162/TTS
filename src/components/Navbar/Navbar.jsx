import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img src="path/to/your/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">JobSeeker</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <div className="relative group">
                <button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">CV</button>
                <div className="absolute hidden group-hover:block bg-white border rounded-md mt-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mẫu CV</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tạo CV</a>
                </div>
              </div>
              <div className="relative group">
                <button className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Công việc</button>
                <div className="absolute hidden group-hover:block bg-white border rounded-md mt-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tìm việc</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Danh mục công việc</a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Nhà tuyển dụng</a>
            <a href="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Đăng nhập</a>
            <a href="/register" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Đăng ký</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
