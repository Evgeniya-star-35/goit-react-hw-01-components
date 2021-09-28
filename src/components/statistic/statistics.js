import PropTypes from "prop-types";
import "./statistic.css";

export default function Statistics({ title, stats }) {
  const createRandomColor = () => {
    return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
      (Math.random() * 255) << 0
    })`;
  };
  return (
    <section className="statistics">
      {title && <h2 className="title">{title.toUpperCase()}</h2>}

      <ul className="statList">
        {stats.map(({ id, percentage, label }) => (
          <li
            key={id}
            className="statisticItem"
            style={{ backgroundColor: createRandomColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
