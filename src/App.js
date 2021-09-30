import FriendsList from './components/friends/FriendsList';
import Statistics from './components/statistic/Statistic';
import Profile from './components/profile/Profile';
import TransactionHistory from './components/transactions/TransactionHistory';
import user from '././jsonFiles/user.json';
import statisticalData from '././jsonFiles/statistical-data.json';
import transaction from '././jsonFiles/transactions.json';
import friends from '././jsonFiles/friends.json';
import Container from './components/container/container';

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendsList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <TransactionHistory transactions={transaction} />
    </Container>
  );
}
