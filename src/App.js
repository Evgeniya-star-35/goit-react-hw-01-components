import FriendsList from "./components/friends/friendsList";
import Statistics from "./components/statistic/statistics";
import Profile from "./components/profile/Profile";
import TransactionHistory from "./components/transactions/TransactionHistory";
import user from "././jsonFiles/user.json";
import statisticalData from "././jsonFiles/statistical-data.json";
import transactions from "././jsonFiles/transactions.json";
import friend from "././jsonFiles/friends.json";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendsList items={friend} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
