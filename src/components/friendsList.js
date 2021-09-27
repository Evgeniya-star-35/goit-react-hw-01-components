import Friend from "./friend";
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
