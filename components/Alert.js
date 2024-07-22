const Alert = ({ alerts }) => {
  return (
    <div className="mt-6">
      {alerts.map((alert, index) => (
        <div key={index} className={`p-4 mb-4 text-sm ${alert.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          {alert.message}
        </div>
      ))}
    </div>
  );
};

export default Alert;
