import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search'

import axios from 'axios';
import './App.css';


class App extends Component{

  state = {
    users: [],
    loading: false
  }
  
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id=${
  //         process.env.REACT_APP_GITHUB_CLIENT_ID
  //       }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users: res.data, loading: false});
  // }
   
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/users?q${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
    this.setState({ users: res.data.items, loading: false });  
    }


  
  render(){
      return (
        <Fragment>
          <Navbar title="GitHub Finder" icon="fab fa-github"/>
          
          <div className="container">
            <Search searchUsers={this.searchUsers} /> 
            <Users loading={this.state.loading} users={this.state.users}/>          
          </div>
        </Fragment>
      );
  }
}

export default App;
