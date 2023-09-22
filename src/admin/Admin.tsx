import { GoogleAuthProvider, UserCredential, signInWithPopup } from 'firebase/auth';
import './Admin.css';
import { auth } from '../firebase';
import { useState } from 'react';
import Dashboard from './dashboard/Dashboard';

const Admin = () => {
  const [user, setUser] = useState<UserCredential>();
  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((creds) => {setUser(creds); return true})
    .catch((err) => console.log(err))
  }
  const isAdmin = (user: UserCredential) : boolean => {
    if(user.user.email?.split('@')[1] === 'jobforme.ie') return true;
    else alert('Access Denied')
    return false;
  }

  return (
    <main className='d-flex align-items-center justify-content-center' id="admin">
        { user && isAdmin(user) == true ?
          <Dashboard/> :
          <button className='btn border-dark' onClick={() => handleGoogle()}>Sign into Dashboard</button>}
    </main>
  )
}

export default Admin