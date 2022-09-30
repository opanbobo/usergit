import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

import PropTypes from 'prop-types';

const Search = ({icon}) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { users, loading, searchUser, clearUsers } = githubContext;
    const { showAlert } = alertContext;

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        if (text === '') {
            showAlert('Please Enter Something...', 'light');
        } else {
            searchUser(text);
            (loading === false) && setText('');
        }
    };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <div className='form-wrapper'>
                <form onSubmit={onSubmit} className='form'>
                    <input type='text' name='text' className='w-50 rounded' value={text} placeholder='Search Users...' onChange={onChange} />
                    <button
                        type='submit'
                        value='Search'
                        className='btn btn-block btn-search'
                    >
                    <i className={icon}></i>
                    </button>
                </form>
            </div>
            {users.length > 0 && (
                <button className='btn btn-danger btn-block btn-clear' onClick={clearUsers}>
                    Clear
                </button>
            )}
        </div>
    )
}

Search.defaultProps = {
    icon: 'fa fa-search'
}
Search.propTypes = {
    icon: PropTypes.string.isRequired
}

export default Search;
