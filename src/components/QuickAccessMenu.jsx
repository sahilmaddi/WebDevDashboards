import React from 'react';

const QuickAccessMenu = () => {
  const menuItems = [
    { icon: '🎯', label: 'Goals', color: 'bg-red-500' },
    { icon: '🍽️', label: 'Popular Dishes', color: 'bg-blue-500' },
    { icon: '📜', label: 'Menus', color: 'bg-teal-500' },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center w-full text-left px-4 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            <div className={`${item.color} w-10 h-10 rounded-full flex items-center justify-center mr-4`}>
              <span className="text-xl">{item.icon}</span>
            </div>
            <span className="text-white font-medium">{item.label}</span>
            <span className="ml-auto text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessMenu;
