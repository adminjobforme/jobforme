import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import './Dashboard.css';
import OrdersOverview from '../tabs/orders/OrdersOverview';

const Dashboard = () => {
  const handleSignOut = async () => {
    await signOut(auth).then(
    () => location.replace('/')
    )
  }

  return (
    <main className='d-flex flex-column align-items-center' id='admin-dashboard'>
        <div className=' d-flex justify-content-between align-items-center border-bottom w-100 p-2'>
            <h6>Welcome {auth.currentUser?.displayName?.split(' ')[0]}!</h6>
            <button className="btn rounded btn-danger" onClick={() => handleSignOut()}>Sign out</button>
        </div>
        <div className='w-100 d-flex align-items-center justify-content-center overflow-auto'>
            <OrdersOverview/>
        </div>
    </main>
  )
}

export default Dashboard