import React from 'react';

const RecentOrders = () => {
    const orders = [
      { customer: { name: 'Wade Warren', avatar: 'https://i.pravatar.cc/40?img=1' }, orderNo: '15478256', amount: 124.00, status: 'Delivered' },
      { customer: { name: 'Jane Cooper', avatar: 'https://i.pravatar.cc/40?img=2' }, orderNo: '48965786', amount: 365.02, status: 'Delivered' },
      { customer: { name: 'Guy Hawkins', avatar: 'https://i.pravatar.cc/40?img=3' }, orderNo: '78958215', amount: 45.88, status: 'Cancelled' },
      { customer: { name: 'Kristin Watson', avatar: 'https://i.pravatar.cc/40?img=4' }, orderNo: '20965732', amount: 65.00, status: 'Pending' },
      { customer: { name: 'Cody Fisher', avatar: 'https://i.pravatar.cc/40?img=5' }, orderNo: '95715620', amount: 545.00, status: 'Delivered' },
      { customer: { name: 'Savannah Nguyen', avatar: 'https://i.pravatar.cc/40?img=6' }, orderNo: '78514568', amount: 128.20, status: 'Delivered' },
    ];

    return (
      <div className="bg-gray-800 rounded-lg shadow-md">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
        </div>
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="text-sm text-gray-400">
                <th className="text-left pb-3">Customer</th>
                <th className="text-left pb-3">Order No.</th>
                <th className="text-left pb-3">Amount</th>
                <th className="text-left pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderNo} className="border-t border-gray-700">
                  <td className="py-3 flex items-center">
                    <img src={order.customer.avatar} alt={order.customer.name} className="w-8 h-8 rounded-full mr-3" />
                    <span>{order.customer.name}</span>
                  </td>
                  <td className="py-3">{order.orderNo}</td>
                  <td className="py-3">${order.amount.toFixed(2)}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Delivered' ? 'bg-green-500 text-green-100' :
                      order.status === 'Cancelled' ? 'bg-red-500 text-red-100' :
                      'bg-yellow-500 text-yellow-100'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default RecentOrders;
