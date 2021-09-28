import PropTypes from "prop-types";
import "./profile.css";

export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="statsItem">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="statsItem">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="statsItem">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar:
    "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg",
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
