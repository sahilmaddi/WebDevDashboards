const StatsCard = ({ title, value, change }) => {
    return (
      <div className="bg-dark-card p-4 rounded-lg flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-400">{title}</h3>
          <h2 className="text-2xl font-semibold">{value}</h2>
        </div>
        <span className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 ? `+${change}%` : `${change}%`}
        </span>
      </div>
    );
  };
export default StatsCard;
