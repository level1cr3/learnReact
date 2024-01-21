import Form from "./components/ExpenseTracker/Form";
import Table from "./components/ExpenseTracker/Table";
import { useState } from "react";

type ProductInfo = {
  description: string;
  amount: number;
  category: string;
};

function App() {
  const defaultValue: ProductInfo[] = [];
  const [expense, setExpense] = useState(defaultValue);

  const categories = ["Groceries", "Utilities", "Entertainment"];

  const handleAddToExpense = (data: ProductInfo) => {
    setExpense([...expense, data]);
  };

  const handleExpenseDelete = (index: number) => {
    setExpense(expense.filter((item, i) => i !== index));
  };

  return (
    <>
      <Form
        categoryDropdownData={categories}
        addToExpense={handleAddToExpense}
      />
      <div className="my-5"></div>
      <Table
        onDelete={handleExpenseDelete}
        filter={categories}
        data={expense}
      />
    </>
  );
}

export default App;
