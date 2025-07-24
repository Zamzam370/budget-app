import { useEffect, useState } from "react";

function BudgetApp() {
  const [describtion, setDescribtion] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load transactions from localStorage on mount
  useEffect(() => {
   localStorage.getItem(transactions);
   
  }, []);

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (editId) {
      const updated = transactions.map((t) =>
        t.id === editId ? { id: editId, describtion, amount } : t
      );
      setTransactions(updated);
      setEditId(null);
    } else {
      setTransactions([
        ...transactions,
        { id: Date.now(), describtion, amount },
      ]);
    }
    setDescribtion('');
    setAmount('');
  };

  const handleEdit = (t) => {
    setEditId(t.id);
    setDescribtion(t.describtion);
    setAmount(t.amount);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const total = transactions.reduce((acc, t) => acc + Number(t.amount), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-500 to-slate-500">
      <h1 className="text-4xl font-bold text-center text-indigo-700 drop-shadow-md mb-4 py-12 px-4">
        Personal Finance Tracker
      </h1>

      <h2 className="text-2xl text-center font-semibold text-white mb-8">
        Total Amount: ${total}
      </h2>

      <div className="max-w-5xl mx-auto">
        <table className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
          <thead className="bg-slate-300 text-slate-700">
            <tr>
              <th className="text-left px-6 py-3 font-semibold">Description</th>
              <th className="text-left px-6 py-3 font-semibold">Amount</th>
              <th className="text-left px-6 py-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr
                key={t.id}
                className="border-t border-slate-200 bg-slate-300 text-slate-700"
              >
                <td className="px-6 py-3">{t.describtion}</td>
                <td className="px-6 py-3">${t.amount}</td>
                <td className="px-6 py-3 space-x-2">
                  <button
                    onClick={() => handleEdit(t)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded-full transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-md mx-auto mt-20 p-8 rounded-2xl shadow-2xl bg-slate-300 text-slate-700">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {editId ? "Edit Transaction" : "Add Transaction"}
        </h2>
        <form
          className="space-y-4 bg-slate-300 text-slate-700"
          onSubmit={addTransaction}
        >
          <input
            type="text"
            placeholder="Description"
            className="w-full border border-slate-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setDescribtion(e.target.value)}
            value={describtion}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            className="w-full border border-slate-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition duration-300 cursor-pointer"
          >
            {editId ? "Update Transaction" : "Add Transaction"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BudgetApp;
