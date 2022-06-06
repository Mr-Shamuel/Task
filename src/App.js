import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Components/Navbars/Navbars";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Search from "./Components/Search/Search";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Categories from "./Components/Categories/Categories";

function App() {

  return (
    <div>
      
      
      <Router>
      <Navbars></Navbars>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/categories">
            <Categories></Categories>
          </Route>


          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
              <Register></Register>
          </Route>

          {/* <PrivateRoute path="/postform">
            <PostForm></PostForm>
          </PrivateRoute> */}


        </Switch>
      </Router>
    </div>
  );
}

export default App;
