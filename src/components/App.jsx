import React from 'react';
import { Container } from './feedback/FeedbackStyled';
import FeedbackStats from './feedback/FeedbackStats';
import Feedbacks from './feedback/Feedback';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function changeState(event) {
    const key = event.target.dataset.type;
    if (key === 'good') setGood(good + 1);
    else if (key === 'neutral') setNeutral(neutral + 1);
    else if (key === 'bad') setBad(bad + 1);
  }

  function countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }

  const countPositiveTotalPercantage = (total, good) => {
    return total ? Math.ceil((good * 100) / total) : 0;
  };

  return (
    <Container>
      <Feedbacks
        options={['good', 'neutral', 'bad']}
        changeState={changeState}
      ></Feedbacks>
      <FeedbackStats
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback(good, neutral, bad)}
        goodPercentage={countPositiveTotalPercantage(
          countTotalFeedback(good, neutral, bad),
          good
        )}
      ></FeedbackStats>
    </Container>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   changeState = evt => {
//     const key = evt.target.dataset.type;
//     const stateObject = {};
//     stateObject[key] = this.state[key] + 1;
//     this.setState(stateObject);
//   };

//   countTotalFeedback = (good, neutral, bad) => {
//     return good + neutral + bad;
//   };
//   countPositiveTotalPercantage = (total, good) => {
//     return total ? Math.ceil((good * 100) / total) : 0;
//   };

//   render() {
//     const good = this.state.good;
//     const neutral = this.state.neutral;
//     const bad = this.state.bad;
//     return (
//       <Container>
//         <Feedbacks
//           options={Object.keys(this.state)}
//           changeState={this.changeState}
//         ></Feedbacks>
//         <FeedbackStats
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback(good, neutral, bad)}
//           goodPercentage={this.countPositiveTotalPercantage(
//             this.countTotalFeedback(good, neutral, bad),
//             good
//           )}
//         ></FeedbackStats>
//       </Container>
//     );
//   }
// }
// export default App;
