import PropTypes from "prop-types";
import defaultImage from "./default-img.jpg";
export default function Friend({ avatar = defaultImage, name, isOnline }) {
  return (
    <div className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}
Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
