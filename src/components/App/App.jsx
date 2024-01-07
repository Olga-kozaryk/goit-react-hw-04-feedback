
import { Container } from "./App.styled";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let counter = prev => prev + 1;
  const onLeaveFeedback = (type) => {
(type === 'good') ? setGood(counter) :
(type === 'neutral') ? setNeutral(counter) : setBad(counter);
  }

 const countTotalFeedback = good + neutral + bad;
  

 const positiveFeedbackPercentage = () => {
 return (!countTotalFeedback) ? 0 : Math.round((good * 100) / countTotalFeedback);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}



