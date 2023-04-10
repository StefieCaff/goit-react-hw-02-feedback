import { useState, useEffect } from "react"
//import { countTotalFeedback, countPositiveFeedbackPercentage} from '../Utils/utils.js'

import { Logo, LogoTitle } from './Logo/Logo.jsx';
import { Section } from './Section/Section.jsx'
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions.jsx";


export const App = () => {
  const [feedback, setFeedback] = useState({ bad: 0, neutral: 0, good: 0 });
  
  useEffect(() => {
    console.log("hooks!");
  }, [feedback]);
  
  

  const countTotalFeedback = () => {
    return (feedback.good + feedback.bad + feedback.neutral);
  }

  const countPositiveFeedbackPercentage = () => {
    return (
    isNaN(Math.round((feedback.good / countTotalFeedback()) * 100))
      ? 0
        : Math.round((feedback.good / countTotalFeedback()) * 100)
    );
  };

  const handleGoodFeedback = event => {
    setFeedback(prevFeedback => ({ ...prevFeedback, good: prevFeedback.good + 1}));
  }
  
  const handleNeutralFeedback = event => {
    setFeedback(prevFeedback => ({ ...prevFeedback, neutral: prevFeedback.neutral + 1}));
  }
 
  const handleBadFeedback = event => {
    setFeedback(prevFeedback => ({ ...prevFeedback, bad: prevFeedback.bad + 1}));
  }
  
  const total = countTotalFeedback()
    return (
      <> 
        <Logo/>
        <LogoTitle/>
      
        <Section title="How was your experience?">
        
          <FeedbackOptions
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            onGoodFeedback={handleGoodFeedback}
            onNeutralFeedback={handleNeutralFeedback}
            onBadFeedback={handleBadFeedback}
          />
          {
            total === 0
              ? (
                <Notification message = "Let the tally begin! Woot!"/>
              )
              :(
                <Statistics
                  good={feedback.good}
                  neutral={feedback.neutral}
                  bad={feedback.bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()}
               />
              )
          }
        </Section>
      </>
    );
};
