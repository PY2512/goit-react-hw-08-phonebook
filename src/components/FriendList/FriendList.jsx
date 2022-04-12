import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './friendList.module.css';
import PropTypes from 'prop-types';


const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendsList}>
            {friends.map(({avatar, name, isOnline, id}) =>(
                <FriendListItem
                    key={id}
                    id={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
            />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
};

export default FriendList;