import React from 'react';

const Balance = ({ transactions }) => {
  const total = transactions.reduce((acc, t) => acc + t.amount, 0).toFixed(2);
  
  return (
    <div className="balance-card">
      <h4>Total Balance</h4>
      <h1 className={total >= 0 ? 'plus' : 'minus'}>${total}</h1>
    </div>
  );
};

export default Balance;