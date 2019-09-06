import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About'
import axios from 'axios';
import './App.css';


class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    setAlert: null
  }

  searchUsers = async text => {
    this.setState({
      loading: true
    });

    const res = await axios.get(
      `https://api.github.com/users?q${text}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      users: res.data.items,
      loading: false
    });
  }

  //Getting single GitHub User
  getUser = async (username) => {

    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({
      user: res.data,
      loading: false
    });

  }

  //clear users from the state
  clearUsers = () => this.setState({
    users: [],
    loading: false
  });

  //Setting an alert
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type
      }
    });
    setTimeout(() => this.setState({
      alert: null
    }), 2500);
  }

  render() {

    const {
      user,
      users,
      loading
    } = this.state;

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
                      this.searchUsers
                    }
                    clearUsers={
                      this.clearUsers
                    }
                    showClear={
                      users.length > 0 ? true : false
                    }
                    setAlert={
                      this.setAlert
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
                          this.getUser
                        }
                        user={
                          user
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
            }
            
export default App;