import React from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBacks = ['good', 'neutral', 'bad'];

  const updateStatistics = feedBack => {
    if (feedBack === feedBacks[0]) setGood(good + 1);
    if (feedBack === feedBacks[1]) setNeutral(neutral + 1);
    if (feedBack === feedBacks[2]) setBad(bad + 1);
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  return (
    <>
      <Section tittle="Please leave feedback">
        <FeedbackOptions
          options={feedBacks}
          onLeaveFeedback={updateStatistics}
        />
      </Section>
      <Section tittle="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </Section>
    </>
  );
};
