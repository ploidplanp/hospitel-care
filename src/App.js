import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Signin from "./components/Authen/Signin"
import Home from "./components/Home/Home.jsx";
import RoomDetail from "./components/RoomDetail/RoomDetail";
import AddResident from "./components/AddResident/AddResident";
import EditResident from "./components/EditResident/EditResident";
import Available from "./components/Home/Available";
import Signup from './components/Authen/Signup'
import LogResident from './components/LogResident/LogResident'
import NotFound from "./components/Notfound/notFound";
import UserPool from "./config/userPool";

function App() {
  const isLoggedIn = () => {
    return UserPool.getCurrentUser();
  }

  const SecuredRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )

  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/sign-up" component={Signup} />
            <SecuredRoute path="/home" component={Home} />
            <SecuredRoute path="/resident-log" component={LogResident} />
            <SecuredRoute path="/room-detail/:roomid" component={RoomDetail} />
            <SecuredRoute path="/add-resident/:roomid" component={AddResident} />
            <SecuredRoute path="/edit-resident/:roomid" component={EditResident} />
            <SecuredRoute path="/available" component={Available} />
            <SecuredRoute excact path="*" component={NotFound} />
            {/* <Route exact path="*" component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
