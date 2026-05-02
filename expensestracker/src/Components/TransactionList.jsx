import React from 'react';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="history">
      <h3>History</h3>
      <ul className="list">
        {transactions.map(t => (
          <li key={t.id} className={t.amount < 0 ? 'minus' : 'plus'}>
            <div>
              <strong>{t.text}</strong>
              <small>{t.category}</small>
            </div>
            <span>{t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}</span>
            <button onClick={() => onDelete(t.id)} className="del-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;