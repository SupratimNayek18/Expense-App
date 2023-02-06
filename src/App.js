import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const products = [
    {
      title: "Product 1",
      price: "10",
      description: "First Product",
    },
    {
      title: "Product 2",
      price: "20",
      description: "Second Product",
    },
    {
      title: "Product 3",
      price: "25",
      description: "Third Product",
    },
    {
      title: "Product 4",
      price: "15",
      description: "Fourth Product",
    },
  ];
  return (
    <div className="main">
      <div className="container">
        <div className="box">
          <span className="title">Expense App</span>
        </div>
      </div>
      <ExpenseForm />
      <div className="expense-items-div">
        {products.map((data) => {
          return <ExpenseItem data={data} />;
        })}
      </div>
    </div>
  );
}

export default App;
