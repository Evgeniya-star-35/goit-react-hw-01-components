import FriendsList from "./components/friendsList";
import friends from "./friends.json";

export default function App() {
  return (
    <div>
      <FriendsList items={friends} />
    </div>
  );
}
