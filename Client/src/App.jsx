import './index.css'
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Page/Home';
import Footer from './components/Footer/Footer';
// import AuthNavbar from './components/Navbar/AuthNavbar';
import Register from './components/Page/Register';
import Login from './components/Page/Login';
import Jobs from './components/Page/Jobs';
import Profile from './components/Page/Profile';
import Applied from './components/Page/Applied';

function App() {
  const [user, setUser] = useState(!!localStorage.getItem('token'));

  return (
    <>
      {/* {user ? <Navbar /> : <AuthNavbar />} */}
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          {/* <Route path="/jobs" element={user ? <Jobs /> : <Login setUser={setUser} />} /> */}
          <Route path='/jobs' element={<Jobs />}/>
          <Route path="/profile" element={user ? <Profile /> : <Login setUser={setUser} />} />
          <Route path="/applied" element={user ? <Applied /> : <Login setUser={setUser} />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}


export default App;
