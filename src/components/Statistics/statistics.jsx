import { Component } from 'react';

export class Statistics extends Component {
  render () {
    return (
        <div className="statisctics">
            <p>Good: <span>{this.props.good}</span></p>
            <p>Nuetral: <span>{this.props.neutral}</span></p>
            <p>Bad: <span>{this.props.bad}</span></p>
            <p>Total: <span>{this.props.total}</span></p>
            <p>Positive feedback: <span>{this.props.positivePercentage}</span>%</p>
        </div>
    )
  }
}
