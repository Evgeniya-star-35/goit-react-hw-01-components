import Friend from "./friend";
import PropTypes from "prop-types";
export default function FriendsList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Friend
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
