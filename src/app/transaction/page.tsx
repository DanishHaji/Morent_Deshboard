import React from 'react';

// Dummy Data for Transactions
const transactions = [
  {
    transactionId: 'TX12345',
    amount: 200,
    paymentMethod: 'Credit Card',
    status: 'Completed',
    transactionDate: '2025-02-01',
  },
  {
    transactionId: 'TX12346',
    amount: 150,
    paymentMethod: 'PayPal',
    status: 'Pending',
    transactionDate: '2025-02-02',
  },
  {
    transactionId: 'TX12347',
    amount: 500,
    paymentMethod: 'Bank Transfer',
    status: 'Completed',
    transactionDate: '2025-02-03',
  },
];

const Transactions = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <p className="mt-4 text-lg">
        View all transactions made through the system.
      </p>

      {/* Transactions Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Transaction ID</th>
              <th className="px-4 py-2 text-left text-gray-600">Amount</th>
              <th className="px-4 py-2 text-left text-gray-600">Payment Method</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-gray-600">Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={transaction.transactionId}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-4 py-2 text-sm">{transaction.transactionId}</td>
                <td className="px-4 py-2 text-sm">${transaction.amount}</td>
                <td className="px-4 py-2 text-sm">{transaction.paymentMethod}</td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : transaction.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm">{transaction.transactionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
