import { Component } from 'react';

export class FeedbackOptions extends Component {
  render () {
    const { options, onLeaveFeedback} = this.props;
    return (
        <div className="feedbackOptions">
            {options.map(input => (
                  <button key={input} onClick={() => onLeaveFeedback(input)}>{input}</button>
            ))}
        </div>
    )
  }
}



