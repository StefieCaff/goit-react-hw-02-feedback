
const countTotalFeedback = (good, bad, neutral) => (good + bad + neutral);

const countPositiveFeedbackPercentage = (good, total) => Math.round((good / total) * 100);

export { countTotalFeedback, countPositiveFeedbackPercentage}