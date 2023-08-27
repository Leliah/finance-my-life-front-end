import axios from "axios";
import { useState, useEffect } from "react";
import Transaction from './Transaction';


const API = process.env.REACT_APP_API_URL;
console.log(API)

function Transactions() {
  const [transactions, setTransactions] = useState([]);
 // const [accountBalance, setAccountBalance] = useState(0);


  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data)
      })
      .catch((e) => console.error("catch", e));
      
  }, []);

  //NOT SURE WHY THIS ISN'T WORKING???
  const showBalance = () => {
    let total = 0;
    transactions.forEach((transaction) =>  {
      transaction.category === "income" ? (total += transaction.amount) : (total -= transaction.amount)
    })
    return total
  }

   const accountBalance = showBalance()
  


  return (
    <div className="Transactions">
      <section>
        <h3 style={{justifyContent:'center', display:'flex'}}>Account Balance: ${accountBalance}</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Transactions