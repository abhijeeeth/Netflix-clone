import NavBar from "./Components/NavBar";
import { AuthContextProvider } from "./Context/AuthContext";
import Home from './Pages/Home'
import {Route , Routes} from "react-router-dom"
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";

function App() {
  return (
    <div className="app">
    <AuthContextProvider>
     <NavBar/> 
     <Routes >
      <Route path='/' element={<Home/> } />
      <Route path="/login" element={<Login/> }/>
      <Route path="/signin" element={<SignUp/> }/>
      <Route path="/account" element={<Account/> }/>
     </Routes>
     </AuthContextProvider>
    </div>
  );
  }

export default App;
