import { Link } from "react-router-dom";

function Transaction({ transaction, index}) {
  
  return (
    <tr>
      <td>
        <b>{transaction.date}</b>
      </td>

      <td>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
      </td>

      <td>
        {transaction.amount}
      </td>
    </tr>
  )
}

export default Transaction