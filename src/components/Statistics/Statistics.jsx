import css from '../Section.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({
  title,
  children,
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) => {
  return (
    <div>
      <h2 className={css.statistics}>{title}</h2>
      {total > 0 && (
        <>
          <p className={css.statElem}>Good: {good}</p>
          <p className={css.statElem}>Neutral: {neutral}</p>
          <p className={css.statElem}>Bad: {bad}</p>
          <p className={css.statElem}>Total: {total}</p>
          <p className={css.statElem}>
            Positive feedback:{' '}
            {isNaN(positivePercentage) ? `0%` : `${positivePercentage}%`}
          </p>
        </>
      )}
      {children}
    </div>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.element,
};
