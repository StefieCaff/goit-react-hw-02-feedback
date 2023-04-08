//import { Feedback } from './Feedback/Feedback';
import { Logo, LogoTitle } from './Logo/Logo';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <> 
       <Logo
        width="50"
        height="50"
      />
      <LogoTitle />
      {/* <Feedback/> */}
      <Statistics/>
     
    </>
  );
};
