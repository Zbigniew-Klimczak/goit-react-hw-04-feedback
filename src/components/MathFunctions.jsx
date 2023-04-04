export const countTotalFeedback = (good, neutral, bad) => {
  return good + neutral + bad;
};
export const countPositiveFeedbackPercentage = (good, totalFeedback) => {
  return (Math.round((good / totalFeedback) * 10000) / 100).toFixed(2);
};
