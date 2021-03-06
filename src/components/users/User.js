import React, {Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        //eslint-disable-next-line
    }, []);
    
        const {
            name,
            company,
            avatar_url,
            location, 
            bio,
            blog, 
            login,
            html_url, 
            followers, 
            following, 
            public_repos,
            public_gists, 
            hireable
        } = user;

        if (loading) return <Spinner />;
 
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back To Search</Link>
                Hireable: {' '}
                {hireable ? (<i className="fas fa-check text-success" />) : (<i className="fas fa-times-circle text-danger" />) }
                <div className='card grid-2'>
                    <div classname="all-center">
                        <img src={avatar_url} className="round-img" alt="" style={{ width: '250px'}} />
                    </div>
                    <h1>{name}</h1>
                    <p>{location}</p> 
                </div>

                <div> 
                    {bio && (
                        <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </Fragment>
                    )}

                     <a href={html_url} className="btn btn-dark my-1">Visit My GitHub Profile</a> 

                     <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username: </strong> {login}
                            </Fragment>}
                        </li>

                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong> {company}
                            </Fragment>}
                        </li>

                        <li>
                            {blog && <Fragment>
                                <strong>Website: </strong> {blog}
                            </Fragment>}
                        </li>
                        
                       
                     </ul>
                </div> 

                

                <div className="card text-center">
                      <div classNam="badge badge-light">Followers: {followers}</div>       
                      <div classNam="badge badge-light">Following: {following}</div>
                      <div classNam="badge badge-light">Public Repos: {public_repos}</div>
                      <div classNam="badge badge-light">Public Gists: {public_gists}</div>   
                </div>
             <Repos repos={repos} />
            </Fragment>
        )
    
}

  User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
}; 

export default User
