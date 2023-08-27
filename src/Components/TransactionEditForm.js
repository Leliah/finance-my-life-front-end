import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();

  const [ transaction, setTransaction ] = useState ({
      item_name: '',
      amount: 0,
      date: "",
      from: '',
      category: ''
});

const handleTextChange = (event) => {
  setTransaction({ ...transaction, [event.target.id]: event.target.value });
};


useEffect(() => {
  axios
  .get(`${API}/transactions/${index}`)
  .then((response) => setTransaction(response.data))
  .catch((e) => console.error("catch", e));
}, [])

const handleSubmit = (event) => {
  event.preventDefault();
  updateTransaction(transaction, index);
};

const updateTransaction = (updatedTransaction) => {
  axios
    .put(`${API}/transactions/${index}`, updatedTransaction)
    .then(() => {
      navigate(`/transactions/${index}`);
    })
    .catch((e) => console.error("catch", e));
};

return (
  <div className="Edit">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Item Name:</label>
      <input
        id="name"
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

export default TransactionEditForm