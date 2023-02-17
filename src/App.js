import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";

import styles from "./App.module.css";
import Loader from "./loader/Loader";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Expense 1",
      price: "10",
      description: "First Expense",
    },
    {
      id: 2,
      title: "Expense 2",
      price: "20",
      description: "Second Expense",
    },
    {
      id: 3,
      title: "Expense 3",
      price: "25",
      description: "Third Expense",
    },
    {
      id: 4,
      title: "Expense 4",
      price: "15",
      description: "Fourth Expense",
    },
  ];
  const [expenseState, setExpenseState] = useState(expenses);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const addNewExpense = (newExpense) => {
    setExpenseState([newExpense, ...expenseState]);
  };

  return (
    <div className={styles.main}>
      {isLoading ? (
        <div className={styles.loader_container}>
          <Loader />
        </div>
      ) : (
        <div className={styles.main_loader_group}>
          <div className={styles.container}>
            <div className={styles.box}>
              <span className={styles.title}>Expense App</span>
            </div>
          </div>
          <ExpenseForm addNewExpense={addNewExpense} />
          <div className={styles.expense_items_div}>
            {expenseState.map((data) => {
              return (
                <ExpenseItem
                  key={data.id}
                  title={data.title}
                  price={data.price}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
