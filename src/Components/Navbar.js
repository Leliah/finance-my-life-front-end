import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <h1><Link to='/transactions'> Finance My Life</Link></h1>
        
        <button className="btn btn-info">
            <Link to='/transactions/new'>New Transaction </Link>
        </button>
    </nav>
  )
}

export default Navbar