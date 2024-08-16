import React from 'react';

const feedbacks = [
  {
    name: 'Jenny Wilson',
    feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good.',
    rating: 5,
  },
  {
    name: 'Dianne Russell',
    feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    rating: 4,
  },
  {
    name: 'Devon Lane',
    feedback: 'Normally we share wings, but theirs are lean meaty and tender, and we did not share!',
    rating: 4,
  },
];

const CustomersFeedback = () => {
  return (
    <div className="bg-gray-800 p-4 rounded mb-4">
      <h3 className="text-gray-400 mb-4">Customer's Feedback</h3>
      <ul className="text-gray-300">
        <li>
          <strong>Jenny Wilson</strong>
          <p>The food was excellent and so was the service.</p>
          <p>⭐⭐⭐⭐⭐</p>
        </li>
        <li>
          <strong>Dianne Russell</strong>
          <p>We enjoyed the Eggs Benedict served with homemade focaccia bread.</p>
          <p>⭐⭐⭐⭐⭐</p>
        </li>
        <li>
          <strong>Devon Lane</strong>
          <p>Normally we share wings, but these were amazing!</p>
          <p>⭐⭐⭐⭐⭐</p>
        </li>
        {/* Add more feedback as needed */}
      </ul>
    </div>
  );
};

export default CustomersFeedback;
