import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUser, showClear, clearUsers, setAlert }) => {
    
    const [text, setText] = useState('');

    const onChange = e => setText(e.target.name);  
    
    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            setAlert('Please Enter Something', 'light ');
        } else {
            searchUsers(text);
            setText (''); 
        }
    }

    return (
            <div>
                <form onSubmit={this.onSubmit }>
                    <input type="text" name="text" placeholder="Search Git Users...." value={ text} onChange={onChange}  ></input>
                    <input type="submit" value="search" className="btn"></input>
                </form>
                {showClear && <button 
                    className="button btn-light btn-block" 
                    onClick={clearUsers}>
                    clear
                </button>}                
            </div>
        )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search
