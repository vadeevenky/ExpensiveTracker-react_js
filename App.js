import "./App.css";
import ExpensiveItem from "./components/ExpensiveItem";

function App() {
  const expenses = [
    { title: "car Insurence", date: new Date(), price: 23.14 },
    { title: "Land Investemnt", date: new Date(), price: 90.79 },
    { title: "Home construct", date: new Date(), price: 34.09 },
    { title: "bought gold", date: new Date(), price: 10.24 },
  ];

  return (
    <div className="App">
      <h1>Let's start React JS</h1>
      <ExpensiveItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].price}
      ></ExpensiveItem>
      <ExpensiveItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].price}
      ></ExpensiveItem>
      <ExpensiveItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].price}
      ></ExpensiveItem>
      <ExpensiveItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].price}
      ></ExpensiveItem>
    </div>
  );
}

export default App;
