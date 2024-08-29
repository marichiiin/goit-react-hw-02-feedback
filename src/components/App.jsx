import { Component } from 'react';
import { Statistics } from './Statistics/statistics';

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  };
  
  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      const total = good + neutral + bad;
      const percentage = (good / total) * 100;

      if (isNaN(percentage)) {
          return 0;
      }
      else {
          return Math.round(percentage);
      }
      
  }
  
  handleClick = type => {
      this.setState(prevState => ({
        ...prevState,
        [type]: prevState[type] + 1,
      }));
  };
    
  
  render () {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positiveFeedback = this.countPositiveFeedbackPercentage();
      const inputs = ['good', 'neutral', 'bad'];
      return (
          <>
            <FeedbackOptions options={inputs} onLeaveFeedback={this.handleClick}/>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedback}/>
          </>
      )
    }
}
