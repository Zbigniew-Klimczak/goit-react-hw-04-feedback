import css from '../Section.module.css';
import PropTypes from 'prop-types';
export const Notification = ({ message, isFeedback }) => {
  return <>{isFeedback === 0 && <p className={css.notify}>{message}</p>}</>;
};
Notification.propTypes = {
  message: PropTypes.string,
  isFeedback: PropTypes.number,
};
