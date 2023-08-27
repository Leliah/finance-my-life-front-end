import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  let navigate = useNavigate();

  const [ transaction, setTransaction ] = useState ({
      item_name: '',
      amount: 0,
      date: "",
      from: '',
      category: ''
});

const addTransaction = () => {
  axios
    .post(`${API}/transactions`, transaction)
    .then(() => {
      navigate(`/transactions`);
    })
    .catch((e) => console.error("catch", e));
};


const handleTextChange = (event) => {
  setTransaction({ ...transaction, [event.target.id]: event.target.value });
};


const handleSubmit = (event) => {
  event.preventDefault();
  addTransaction();
};


return (
  <div className="new">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Item Name:</label>
      <input
        id="item_name"
        type="text"
        value={transaction.item_name}
        onChange={handleTextChange}
        required
      />
      <br />

      <label htmlFor="url">From:</label>
      <input
        id="from"
        type="text"
        required
        value={transaction.from}
        onChange={handleTextChange}
      />

      <br />

      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="text"
        value={transaction.date}
        onChange={handleTextChange}
      />
      
      <br />

      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        value={transaction.amount}
        onChange={handleTextChange}
      />

      <br />

      <label htmlFor="category">Category:</label>
      <input
        id="category"
        value={transaction.category}
        onChange={handleTextChange}
      />

      <br />

      <input className="btn btn-secondary" type="submit" />
    </form>

  </div>
)
}

export default TransactionNewForm