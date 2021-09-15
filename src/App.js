import './App.css';
import {useState} from "react"
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Upload from "./pages/Upload"
import List from "./pages/List"
import Single from "./pages/Single"

function App() {
  const [getUsers, setUsers] = useState([])
  const [userStatus, setUserStatus] = useState({loggedIn: true, name: 'Bob'})
  const [cars, setCars] = useState([{
    color: "Black",
    gearBox: "Manual",
    name: "Bmw old model",
    photos: ["https://g4.dcdn.lt/images/pix/bmw-635csi-85757427.jpg", "https://www.bmw.lt/content/dam/bmw/common/all-models/i-series/i4/landingpage/bmw-i4-mini-landingpage-ms-03.jpg"],
    price: "5000",
    username: "Andrius",
    year: "1993"
}])

  function addNewUser(user) {
    setUsers([...getUsers, user])
  }

  function login(name) {
    setUserStatus({loggedIn: true, name: name})
  }

  function logout() {
    setUserStatus({loggedIn: false, name: ""})
  }

  function upload(car) {
    setCars([...cars, car])
    console.log(car);
  }


  return (
    <Router>
      <div className="d-flex app">
      
        <Sidebar loggedIn={userStatus}  logout={logout}/>

        <div className="center grow1">
          <Switch>

            <Route exact path="/">
              <Login users={getUsers} login={login}/>
            </Route>

            <Route exact path="/register">
              <Registration newUser={addNewUser}/>
            </Route>

            <Route exact path="/upload">
              <Upload username={userStatus.name} uploadCar={upload}/>
            </Route>

            <Route exact path="/allproducts">
              <List cars={cars}/>
            </Route>

            <Route exact path="/singleproduct/:index">
              <Single cars={cars}/>
            </Route>
          </Switch>
        </div>
        



      </div>
    </Router>

    
  );
}

export default App;
