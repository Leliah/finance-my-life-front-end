import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
    //TAKING THE VALUE OF THE INDEX PARAMETER FROM THE URL
    let { index } = useParams();
    let navigate = useNavigate();
    const [ transaction, setTransaction ] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/transactions/${index}`)
        .then((response) => setTransaction(response.data))
        .catch((e) => console.error("catch", e));
    }, [])

    const handleDelete = () => {
      axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error("catch", e));
    };

  return (
    <article>
        <h3>{transaction.date} - From {transaction.from}</h3>
        <h4>Amount: ${transaction.amount}</h4>
        <p><b>Name:</b> {transaction.item_name}</p>
        <p><b>Category:</b> {transaction.category}</p>

        <div className="backEditDelete">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button className="btn btn-secondary">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button className="btn btn-secondary" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  )
}

export default TransactionDetails