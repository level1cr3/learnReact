import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import { Expense } from "./expense-tracker/components/ExpenseList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const visibleExpense = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) =>
          setExpenses(expenses.filter((item) => item.id !== id))
        }
      />
    </>
  );
}

export default App;
