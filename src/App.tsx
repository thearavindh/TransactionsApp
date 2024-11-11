import React from 'react';
import './styles/TransactionList.scss';
import TransactionList from './components/TransactionList';

const App: React.FC = () => {
  return (
    <div className="App">
      <TransactionList />
    </div>
  );
};

export default App;
