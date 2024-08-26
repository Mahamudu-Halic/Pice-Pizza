import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
    const navigate = useNavigate()
  return (
    <div className='unauthorized'>
        <h3>You are no authorized to view this page</h3>
        <button onClick={() => navigate("/menu")}>Go back to menu</button>
    </div>
  )
}

export default Unauthorized