import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'

import axios from 'axios';
import './App.css';


class App extends Component{

  state = {
    users: [],
    loading: false,
    setAlert: null
  }
   
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/users?q${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
    this.setState({ users: res.data.items, loading: false });  
    }

    //clear users
    clearUsers = () => this.setState({users: [], loading: false});

    //Setting an alert
    setAlert = (msg, type) => {
      this.setState({ alert: { msg, type} }); 
      setTimeout(() => this.setState({ alert: null }), 2500);
    }
  
  render(){

    const { users, loading} = this.state;

      return (
        <Fragment>
          <Navbar title="GitHub Finder" icon="fab fa-github"/>
          
          <div className="container">

            <Alert alert={this.state.alert} />
            
            <Search 
            searchUsers={this.searchUsers}  
            clearUsers={this.clearUsers} 
            showClear={users.length > 0 ? true : false} 
            setAlert={this.setAlert}
            />

            <Users 
            loading={loading} 
            users={users}
            />          
          </div>
        </Fragment>
      );
  }
}

export default App;
