import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 5, category: "groceries" },
    { id: 2, description: "asd", amount: 5, category: "groceries" },
    { id: 3, description: "dsa", amount: 5, category: "groceries" },
  ]);
  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((item) => item.id !== id))}
    />
  );
}

export default App;
