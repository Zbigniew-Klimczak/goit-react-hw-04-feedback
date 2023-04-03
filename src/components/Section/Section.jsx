import css from '../Section.module.css';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.feedback}>{title}</h2>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};
