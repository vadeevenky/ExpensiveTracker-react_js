import "./ExpensiveItem.css";

function ExpensiveItem(props) {
  //   const expensiveDate = new Date(2022, 12, 29);
  //   const expensiveName = "car insurence";
  //   const expensivePrice = "92.56";

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item_price"> ${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;
