import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function Statistics({ title, stats }) {
  const createRandomColor = () => {
    return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
      (Math.random() * 255) << 0
    })`;
  };
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li
            key={id}
            className={s.statisticItem}
            style={{ backgroundColor: createRandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
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
    }).isRequired,
  ),
};
