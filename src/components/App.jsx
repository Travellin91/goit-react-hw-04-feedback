import React, { useState } from 'react';
import Statistics from './Statistics/Statistics.jsx';
import Message from './Message/Message.jsx';
import Feedback from './Feedback/Feedback.jsx';
import Section from './Section/Section.jsx';
import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = type => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  let feedbackContent;

  if (totalFeedback === 0) {
    feedbackContent = <Message message="There is no feedback" />;
  } else {
    feedbackContent = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivefeedback={positiveFeedbackPercentage}
      />
    );
  }

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <Feedback
          options={['Добре', 'Нейтрально', 'Погано']}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>

      <Section title="Statistics">{feedbackContent}</Section>
    </div>
  );
};

export default App;

// class App extends Component {

//   state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//       };

//     handleButtonClick = (type) => {
//       this.setState((prevState) => ({
//         ...prevState,
//         [type]: prevState[type] + 1
//       }));
//     };

//     countTotalFeedback = () => {
//       const { good, neutral, bad } = this.state;
//       return good + neutral + bad;
//     };

//     countPositiveFeedbackPercentage = () => {
//       const { good } = this.state;
//       const total = this.countTotalFeedback();
//       return total === 0 ? 0 : Math.round((good / total) * 100);
//     };

//     render() {
//       const { good, neutral, bad } = this.state;
//       const totalFeedback = this.countTotalFeedback();
//       const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//       let feedbackContent;

//   if (totalFeedback === 0) {
//     feedbackContent = <Message message="There is no feedback" />;
//   } else {
//     feedbackContent = (
//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={totalFeedback}
//         positivefeedback={positiveFeedbackPercentage}
//       />
//     );
//   }

//   return (
//     <div className='container'>
//       <Section title="Please leave feedback">
//         <Feedback
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.handleButtonClick}
//         />
//       </Section>

//       <Section title="Statistics">{feedbackContent}</Section>
//     </div>
//   );

//     }
//   }

//export default App;
