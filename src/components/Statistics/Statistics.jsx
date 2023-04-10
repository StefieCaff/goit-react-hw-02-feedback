import { PropTypes } from 'prop-types';
import { SVG } from '../Logo/Icons';
import { Logo } from '../Logo/Logo.jsx';


export const Statistics = ( props) => {
   const  {
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivePercentage = 0
    } = props;

    
    return (
        <div>
            <Logo/>
            <p>My espresso was:
            </p>
            <ul>
                <li>
                    <StatisticsImg
                        message="Good-FIRE!"
                        icon = "good-fire"
                    />
                    <p>{good}</p>
                </li>
                <li>
                    <StatisticsImg
                        message="MEH!"
                        icon = "neutral-meh"
                    />
                    <p>{neutral}</p>
                </li>
                <li>
                    <StatisticsImg
                        message="Bad-STINKY!"
                        icon="bad-stinky"
                    />
                    <p>{bad}</p>
                </li>
            </ul>
            <div>
                <p>
                    Of <span>{total}</span> tallies, <span>{positivePercentage}</span>% are positive tallies, yay!
                </p>
            </div>
        </div>
    );
};



const StatisticsImg = (props) => {
    const {
        message = "We want your feedforward, thanks!",
        icon = "logo",
    } = props;

    return (
            <div>
                <SVG
                    width = "50"
                    height = "50"
                    name = {icon}
                />
                <p>{message}</p>
            </div>
    );
    
};



Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

StatisticsImg.propTypes = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}