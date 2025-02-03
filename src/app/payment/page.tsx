import React from 'react';

const payments = [
  {
    transactionId: "TX12345",
    paymentMethod: "Credit Card",
    amount: 150.00,
    status: "Completed",
    paymentDate: "2025-01-15T12:34:56Z",
    reference: "Booking #101",
  },
  {
    transactionId: "TX12346",
    paymentMethod: "PayPal",
    amount: 200.00,
    status: "Pending",
    paymentDate: "2025-01-16T10:20:30Z",
    reference: "Booking #102",
  },
  {
    transactionId: "TX12347",
    paymentMethod: "Bank Transfer",
    amount: 300.00,
    status: "Failed",
    paymentDate: "2025-01-17T08:15:10Z",
    reference: "Booking #103",
  },
];

const Payment = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Payment Details</h1>
      <p className="mt-4 text-lg">
        View payment details, transaction history, and any payment-related information.
      </p>

      {/* Payment Table */}
      <div className="mt-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Transaction ID</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Payment Method</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Amount</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Payment Date</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Reference</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-3 px-6 text-sm text-gray-800">{payment.transactionId}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{payment.paymentMethod}</td>
                <td className="py-3 px-6 text-sm text-gray-800">${payment.amount}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{payment.status}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{new Date(payment.paymentDate).toLocaleString()}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{payment.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
