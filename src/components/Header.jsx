import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaShoppingCart, FaCheckCircle, FaTimesCircle, FaDollarSign } from 'react-icons/fa';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import DashboardWidget from './DashboardWidget';
const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded flex items-center space-x-4">
          <FaShoppingCart style={{ color: '#4a90e2', fontSize: '24px' }} />
          <div>
            <h3 className="text-gray-400">Total Orders</h3>
            <p className="text-2xl">75 <span className="text-green-500">+3%</span></p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded flex items-center space-x-4">
          <FaCheckCircle style={{ color: '#4caf50', fontSize: '24px' }} />
          <div>
            <h3 className="text-gray-400">Total Delivered</h3>
            <p className="text-2xl">70 <span className="text-red-500">-3%</span></p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded flex items-center space-x-4">
          <FaTimesCircle style={{ color: '#f44336', fontSize: '24px' }} />
          <div>
            <h3 className="text-gray-400">Total Cancelled</h3>
            <p className="text-2xl">5 <span className="text-green-500">+3%</span></p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded flex items-center space-x-4">
          <FaDollarSign style={{ color: '#9b59b6', fontSize: '24px' }} />
          <div>
            <h3 className="text-gray-400">Total Revenue</h3>
            <p className="text-2xl">$12k <span className="text-green-500">+3%</span></p>
          </div>
        </div>
        <DashboardWidget/>
      </div>
    </>
  );
};

export default Header;
