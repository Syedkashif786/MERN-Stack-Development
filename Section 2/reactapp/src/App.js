import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import EventHandling from "./components/EventHandling";
import './App.css';
import ToDo from "./components/ToDo";
import Contactus from "./components/Contactus";
import Register from "./components/Register";
import UserManager from "./components/UserManager";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position = "top-right" />
      {/* <h1>My React App</h1> */}
      {/* <Home></Home> */}
      
      <BrowserRouter>

      {/* <Link to="/homepage">Homepage</Link>
      <Link to="/loginpage">Login</Link> */}

      <Header></Header>

      <Routes>
        <Route element = {<Home></Home>} path = "/"/>

        <Route element = {<Home></Home>} path = "homepage"/>
        <Route element = {<Login></Login>} path = "login"/>
        <Route element = {<EventHandling></EventHandling>} path = "event"/>
        <Route element = {<ToDo></ToDo>} path = "todo"/>
        <Route element = {<Contactus />} path = "contact"/>
        <Route element = {<Register />} path = "register"/>
        <Route element = {<UserManager />} path = "usermanager"/>


        <Route element = {<NotFound />} path = "*"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


