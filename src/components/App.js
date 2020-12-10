import Profile from '../components/Profile/Profile';
import user from '../components/Profile/user.json';
import Statistics from '../components/Statistics/Statistics';
import statisticalData from '../components/Statistics/statistical-data.json';
import friends from '../components/FriendList/friends.json';
import FriendList from '../components/FriendList/FriendList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory'
import transactions from '../components/TransactionHistory/transactions.json';


export default function App(){
    return (<div>
  <Profile 
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  statsFolovers={user.stats.followers}
  statsViews={user.stats.views}
  statsLikes={user.stats.likes} />

<Statistics title="Upload stats" stats={statisticalData} />;
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
    </div>)
}