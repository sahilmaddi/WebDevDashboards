import React from 'react';
import { FaHome, FaClipboardList, FaWallet, FaClipboardCheck} from 'react-icons/fa';
const Sidebar = () => {
    return (
        <div className="bg-gray-900 h-screen w-20 flex flex-col justify-between items-center py-4">
            <div className="text-white text-2xl">
                {/* App Icon */}
                <div className="mb-8">
                    <div className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full">
                        <span className="text-xl font-bold">A</span>
                    </div>
                </div>

                {/* Navigation Icons */}
                <div className="space-y-6">
                    <FaHome className="text-white text-2xl cursor-pointer" />
                    <FaClipboardList className="text-gray-400 text-2xl cursor-pointer" />
                    <FaWallet className="text-gray-400 text-2xl cursor-pointer"/>
                    <FaClipboardCheck className="text-gray-400 text-2xl cursor-pointer"/>
                </div>
            </div>

            {/* Profile Section */}
            <div className="text-white mb-4">
                <img
                    src="We%20Developer%20Assignment%20Exit.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-gray-600"
                />
            </div>
        </div>
    );
};

export default Sidebar;
