import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserItem({ user: { login, avatar_url } }) {
    
    return (
        <div className='card text-center'>
            <img
                src={avatar_url}
                className='round-img'
                style={{ width: '60px' }}
                alt=''
            />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className='btn rounded btn-green btn-sm my-1'>
                    More
        </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
