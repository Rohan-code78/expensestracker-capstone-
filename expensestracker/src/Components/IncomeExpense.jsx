import React from 'react';

const IncomeExpense = ({ transactions }) => {
  const amounts = transactions.map(t => t.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="summary-container">
      <div className="summary-card income">
        <h5>INCOME</h5>
        <p className="money plus">+${income}</p>
      </div>
      <div className="summary-card expense">
        <h5>EXPENSE</h5>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
