import css from '../Section.module.css';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      <button
        className={css.button}
        type="button"
        onClick={onLeaveFeedback.handleGood}
      >
        {options.good}
      </button>
      <button
        className={css.button}
        type="button"
        onClick={onLeaveFeedback.handleNeutral}
      >
        {options.neutral}
      </button>
      <button
        className={css.button}
        type="button"
        onClick={onLeaveFeedback.handleBad}
      >
        {options.bad}
      </button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.string),
  onLeaveFeedback: PropTypes.objectOf(PropTypes.func),
};
