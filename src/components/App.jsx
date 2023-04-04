import { useState } from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section } from './Section/Section.jsx';
import { Notification } from './Notifications/Notification.jsx';
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from './MathFunctions.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
          onLeaveFeedback={{
            handleGood: () => setGood(good + 1),
            handleNeutral: () => setNeutral(neutral + 1),
            handleBad: () => setBad(bad + 1),
          }}
        ></FeedbackOptions>

        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(good, neutral, bad)}
          positivePercentage={countPositiveFeedbackPercentage(
            good,
            countTotalFeedback(good, neutral, bad)
          )}
        >
          <Notification
            isFeedback={countTotalFeedback(good, neutral, bad)}
            message="There is no feedback"
          ></Notification>
        </Statistics>
      </Section>
    </>
  );
};
