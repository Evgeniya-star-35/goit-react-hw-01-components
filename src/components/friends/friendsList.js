import s from './FriendsList.module.css';
import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendsList({ friends }) {
  return (
    <div className={s.friends}>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            <Friend
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
