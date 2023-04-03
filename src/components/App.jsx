import { Component } from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section } from './Section/Section.jsx';
import { Notification } from './Notifications/Notification.jsx';
export class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  handleGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 10000) / 100
    ).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
            onLeaveFeedback={{
              handleGood: this.handleGood,
              handleNeutral: this.handleNeutral,
              handleBad: this.handleBad,
            }}
          ></FeedbackOptions>

          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          >
            <Notification
              isFeedback={this.countTotalFeedback()}
              message="There is no feedback"
            ></Notification>
          </Statistics>
        </Section>
      </>
    );
  }
}
