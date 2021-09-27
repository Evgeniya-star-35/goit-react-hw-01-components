import Friends from "./components/friends";
import friends from "./friends.json";

export default function App() {
  return (
    <div>
      <Friends
        avatar={friends[0].avatar}
        name={friends[0].name}
        isOnline={friends[0].isOnline}
      />

      <Friends
        avatar={friends[1].avatar}
        name={friends[1].name}
        isOnline={friends[1].isOnline}
      />
    </div>
  );
}
