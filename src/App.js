import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from "./data/user.json";
import styles from "./styles.module.css";
import data from "./data/data.json";
import FriendList from './components/FriendList/FriendList';
import friends from "./data/friends.json";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transaction from './data/transactions.json'


function App() {
    return ( 
        <div className={styles.wrapper}>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transaction} />
        </div>
    );
}

export default App;