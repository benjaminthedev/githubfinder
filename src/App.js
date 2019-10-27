import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About'
import axios from 'axios';
import './App.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState([]);
  const [alert, setAlert] = useState([]);



  const searchUsers = async text => {
   setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users?q${text}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

   setUsers(res.data.items);
   setLoading(false);
  }

  //Getting single GitHub User
  const getUser = async username => {

    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data);  
    setLoading(true);


  }

  //git users repos
  const getUserRepos = async username => {

    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data);
    setLoading(false);

  }


  //clear users from the state



  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  //Setting an alert
  const showAlert = (msg, type) => {
    
    setAlert(
     {
        msg,
        type
      }
    );   
    
    setTimeout(() => setAlert(null), 5000);
  }

      return (
      <Router>
      
      <Fragment >        
          <Navbar title="GitHub Finder"
          icon="fab fa-github" />

          <div className="container">
          
            <Switch>
              <Route exact path="/"
              render={
                props => (<Fragment>
                    <Search searchUsers={
                      searchUsers
                    }
                    clearUsers={
                      clearUsers
                    }
                    showClear={
                      users.length > 0 ? true : false
                    }
                    setAlert={
                      showAlert
                    }
                  />

                  <Users loading={
                      loading
                    }
                    users={
                      users
                    }
                  />

                  </Fragment>
        
                )
              } >
      </Route>
            
      <Route exact path='/about'
                    component={
                      About
                    }
                  />

                  <Route exact path='/user/:login'
                    render={
                      props => (
                        <User {
                        ...props
                        }
                        getUser={
                          getUser
                        }
                        getUserRepos={
                          getUserRepos
                        }
                        user={
                          user
                        }
                        repos={
                          repos
                        }
                        loading={
                          loading
                        }
                      />
                      )
                    }
                  />

                  </Switch>
                </div> 
              </Fragment> 
            </Router>
                );
            }
            
export default App;