import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Grocery() {
  const [groceryItems, setGroceryItems] = useState([
    { id: 1, name: 'Apples', cost: 3.50, quantity: 1, unit: 'lb' },
    { id: 2, name: 'Milk', cost: 4.20, quantity: 1, unit: 'gallon' },
    { id: 3, name: 'Bread', cost: 2.99, quantity: 1, unit: 'loaf' },
    { id: 4, name: 'Cheese', cost: 5.50, quantity: 1, unit: 'lb' },
    { id: 5, name: 'Eggs', cost: 3.80, quantity: 1, unit: 'dozen' },
    { id: 6, name: 'Tomatoes', cost: 2.25, quantity: 2, unit: 'lb' },
    { id: 7, name: 'Chicken Breast', cost: 8.99, quantity: 2, unit: 'lb' },
    { id: 8, name: 'Pasta', cost: 1.50, quantity: 2, unit: 'box' },
  ]);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const total = groceryItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0);
    setTotalCost(total);
  }, [groceryItems]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setGroceryItems(groceryItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setGroceryItems(groceryItems.filter(item => item.id !== id));
  };

  const addItem = () => {
    const newId = Math.max(...groceryItems.map(item => item.id), 0) + 1;
    setGroceryItems([...groceryItems, {
      id: newId,
      name: 'New Item',
      cost: 0,
      quantity: 1,
      unit: 'unit'
    }]);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Grocery Items</h1>
          <button
            onClick={addItem}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            + Add Item
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Item Name</th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Unit Price</th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Unit</th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Quantity</th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Total Cost</th>
                <th className="px-6 py-3 text-center text-gray-700 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {groceryItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-800">{item.name}</td>
                  <td className="px-6 py-4 text-gray-800">${item.cost.toFixed(2)}</td>
                  <td className="px-6 py-4 text-gray-600">{item.unit}</td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    ${(item.cost * item.quantity).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:underline transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Total Grocery Cost</h2>
            <p className="text-3xl font-bold text-green-600">${totalCost.toFixed(2)}</p>
          </div>
          <p className="text-gray-600 text-sm mt-2">Items: {groceryItems.length}</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-gray-700">
            <span className="font-semibold">Tip:</span> Keep track of your grocery spending to better manage your budget. Update quantities as needed.
          </p>
        </div>
      </div>
    </Layout>
  );
}
