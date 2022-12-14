import React, { useContext, useEffect, Fragment } from 'react';
import Spinner from '../Layouts/Spinner';
// import Repos from '../Repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';

const User = ({ match: { params } }) => {
    const { user, getUser, loading, getRepos } = useContext(GithubContext);
    useEffect(() => {
        getUser(params.login);
        getRepos(params.login);
        //eslint-disable-next-line
    }, []);

    const { name,
        avatar_url,
        location,
        bio,
        login,
        html_url,
        followers,
        following,
        public_gists,
        public_repos,
        blog,
        company } = user;

    if (loading) return <Spinner />

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
        </Link>
        
            <div className='card grid-2'>
                <div className='all-centre'>
                    <img
                        src={avatar_url}
                        alt=''
                        className='round-img'
                        style={{ width: '150px' }}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'>
                        Visit GitHub profile
            </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username: {login} </strong>
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company: {company}</strong>
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>
                                        Website: <a href={`https://${blog}`}>{blog}</a>{' '}
                                    </strong>
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='car text-centre my-3 d-none'>
                <div className='badge badge-primary'>Followers: {followers}</div>
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-light'>Public repos: {public_repos}</div>
                <div className='badge badge-dark'>Public gists: {public_gists}</div>
            </div>
            
        </Fragment>
    )
}

export default User;

