
import { Logo, LogoTitle } from './Logo/Logo';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';
export const App = () => {
  return (
    <> 
       <Logo
        width="50"
        height="50"
      />
      <LogoTitle />
      
      <Statistics />
      
      <Feedback />
     
    </>
  );
};
