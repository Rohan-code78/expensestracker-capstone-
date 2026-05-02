import React, { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Shopping');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: category === 'Income' ? +amount : -Math.abs(amount),
      category
    };

    onAdd(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div className="form-box">
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Label (e.g. Rent)" />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Shopping">Shopping</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
        </select>
        <button className="btn">Add Item</button>
      </form>
    </div>
  );
};

export default AddTransaction;