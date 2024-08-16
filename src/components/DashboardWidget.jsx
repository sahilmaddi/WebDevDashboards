import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DashboardWidget = () => {
    const percentage = 70;
  const netProfit = 6759.25;
  const increase = 3;
  const goalCompleted = 70;

  return (
    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'left', flexWrap: 'wrap' }}>
      <div >
        <p>Net Profit:</p>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <p style={{ textAlign: 'left' }}>$6759.25</p>
      </div>
      </div>
  )
};

export default DashboardWidget;
