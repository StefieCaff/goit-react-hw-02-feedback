import { PropTypes } from 'prop-types';
import { SVG } from '../Logo/Icons';



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
            <h2>Espresso experiences tally</h2>
            <ul>
                <li>
                    <StatisticsImg
                        message="My espresso was, good-FIRE!"
                        icon = "good-fire"
                    />
                    <p>{good}</p>
                </li>
                <li>
                    <StatisticsImg
                        message="My espresso was, MEH!"
                        icon = "neutral-meh"
                    />
                    <p>{neutral}</p>
                </li>
                <li>
                    <StatisticsImg
                        message="My espresso was, bad-STINKY!"
                        icon="bad-stinky"
                    />
                    <p>{bad}</p>
                </li>
            </ul>
            <div>
                <p>
                    {total}
                </p>
                <p>
                    {positivePercentage}
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
                    width = "200"
                    height = "200"
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