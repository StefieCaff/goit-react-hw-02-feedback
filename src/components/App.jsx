import { useState, useEffect } from "react"
//import { countTotalFeedback, countPositiveFeedbackPercentage} from '../Utils/utils.js'

import { Logo, LogoTitle } from './Logo/Logo.jsx';
import { Section } from './Section/Section.jsx'
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions.jsx";


export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  
  useEffect(() => {
    console.log("hooks!");
  }, [good, bad, neutral,]);

  const countTotalFeedback = () => {
    return (good + bad + neutral);
  }

  const countPositiveFeedbackPercentage = () => {
    return (
    isNaN(Math.round((good / countTotalFeedback()) * 100))
      ? 0
        : Math.round((good / countTotalFeedback()) * 100)
    );
  };

  const handleLeaveFeedback = () => {
    setGood(a => a + 1);
  };

  return (
    <> 
       <Logo/>
      <LogoTitle/>
      
      <Section title="Add your tally, thanks!">
        
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={handleLeaveFeedback}
        />
      
        <Notification message = "Let the tally begin! Woot!"/>
      
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        </Section>
    </>
  );
  };
