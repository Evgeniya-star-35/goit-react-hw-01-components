import PropTypes from "prop-types";
import stat from "./Statistic.module.css";

export default function Statistics({ title, stats }) {
  const createRandomColor = () => {
    return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
      (Math.random() * 255) << 0
    })`;
  };
  return (
    <section className={stat.statistics}>
      {title && <h2 className={stat.title}>{title.toUpperCase()}</h2>}

      <ul className={stat.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li
            key={id}
            className={stat.statisticItem}
            style={{ backgroundColor: createRandomColor() }}
          >
            <span className={stat.label}>{label}</span>
            <span className={stat.percentage}>{percentage}%</span>
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
