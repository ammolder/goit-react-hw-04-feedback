import { Wrapper } from './App.styled';
import { useState, useEffect } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [goodState, setGoodState] = useState(0);
  const [neutralState, setNeutralState] = useState(0);
  const [badState, setBadState] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = e => {
    const { textContent } = e.target;

    switch (textContent) {
      case 'good':
        setGoodState(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutralState(neutralState + 1);
        break;

      case 'bad':
        setBadState(badState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return goodState + neutralState + badState;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (goodState * 100) / (goodState + neutralState + badState)
    );
  };

  useEffect(() => {
    console.log('start');
  });
  return (
    <Wrapper>
      <Section title="Please leave a feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={goodState}
            neutral={neutralState}
            bad={badState}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Wrapper>
  );
};
