import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList ({friends}) {
  return (
    <ul className={s.friendList}>
    {friends.map(friend => (
      <li className={s.item} key={friend.id}>
  <span className={friend.isOnline ? s.online : s.offline}></span>
  <img className={s.avatar} src={friend.avatar} alt="" width="48" />
   <p className={s.name}>{friend.name}</p>
     </li>
    ))}
  </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
 PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired, 
    })),
}