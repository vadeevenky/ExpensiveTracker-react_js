import "./ExpensiveItem.css";

function ExpensiveItem() {
  const expensiveDate = new Date(2022, 12, 29);
  const expensiveName = "car insurence";
  const expensivePrice = "92.56";

  return (
    <div className="expense-item">
      <div>{expensiveDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expensiveName}</h2>
        <div className="expense-item_price"> ${expensivePrice}</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;
