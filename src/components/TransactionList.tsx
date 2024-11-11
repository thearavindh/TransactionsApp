import React from 'react';
import './TransactionList.scss';

interface Transaction {
  id: number;
  name: string;
  date: string;
  time: string;
  amount: number;
  type: 'received' | 'outgoing';
  avatarUrl: string;
}

const transactions: Transaction[] = [
  { id: 1, name: 'Aokiji', date: '28 Feb 2023', time: '06:23 PM', amount: 13, type: 'received', avatarUrl: 'path/to/avatar1.jpg' },
  { id: 2, name: 'Kizaru', date: '28 Feb 2023', time: '06:23 PM', amount: -9, type: 'outgoing', avatarUrl: 'path/to/avatar2.jpg' },
  { id: 3, name: 'Akainu', date: '28 Feb 2023', time: '06:23 PM', amount: 20, type: 'received', avatarUrl: 'path/to/avatar3.jpg' },
];

const TransactionList: React.FC = () => {
  return (
    <div className="transaction-list">
      <div className="header">
        <h2>Last Transactions</h2>
        <a href="#" className="see-all">See All</a>
      </div>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-item">
          <img src={transaction.avatarUrl} alt={transaction.name} className="avatar" />
          <div className="transaction-details">
            <h3>{transaction.name}</h3>
            <p>{transaction.date} • {transaction.time}</p>
          </div>
          <div className={`transaction-amount ${transaction.type}`}>
            <span>{transaction.type === 'received' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}</span>
            <p>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
