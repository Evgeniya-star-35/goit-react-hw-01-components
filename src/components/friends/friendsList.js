import s from './FriendsList.module.css';
import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendsList({ friends }) {
  return (
    <div className={s.friends}>
      <ul className={s.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <Friend avatar={avatar} name={name} isOnline={isOnline} id={id} />
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
