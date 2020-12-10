import PropTypes from 'prop-types';

export default function FriendList ({friends}) {
  return (
    <ul>
    {friends.map(friend => (
      <li className="item" key={friend.id}>
  <span className="status">{friend.isOnline === true ? 'online' : 'offline'}</span>
  <img className="avatar" src={friend.avatar} alt="" width="48" />
   <p className="name">{friend.name}</p>
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