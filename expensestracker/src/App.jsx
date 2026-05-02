import React, { useState } from 'react';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import TransactionChart from './Components/TransactionChart';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (t) => setTransactions([t, ...transactions]);
  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  return (
    <div className="app-container">
      <div className="main-wrapper">
        <header>
          <h2>My Wallet</h2>
        </header>

        {/* Top Section: Balance & Chart side by side */}
        <div className="top-section">
          <Balance transactions={transactions} />
          <TransactionChart transactions={transactions} />
        </div>

        {/* Separated Income and Expense Cards */}
        <IncomeExpense transactions={transactions} />

        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        <AddTransaction onAdd={addTransaction} />
      </div>
    </div>
  );
}

export default App;
