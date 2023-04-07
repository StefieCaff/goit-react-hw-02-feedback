import { Feedback } from './Feedback/FeedBack'
import IconTemplate from './Icons/IconTemplate';

export const App = () => {
  return (
    <>
      <Feedback
        good={0}
        neutral={0}
        bad={0}
      >
      </Feedback>
      <IconTemplate />
    </>
  );
};
