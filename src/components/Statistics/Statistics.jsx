import { PropTypes } from 'prop-types';
import { SVG } from '../Logo/Icons';



export const Statistics = ( props) => {
//    const  {
//     good = 0,
//     neutral = 0,
//     bad = 0,
//     total = 0,
//     positivePercentage = 0
//     } = props;

    
    return (
        <div>
            <h2>How peeps are voting on our espresso</h2>
            <ul>
                <StatisticsItem
                    message="My espresso was FIRE!"
                    icon = "good-fire"
                />
                <StatisticsItem
                    message="My espresso was MEH!"
                    icon = "neutral-meh"
                />
                <StatisticsItem
                    message="My espresso was STINKY!"
                    icon = "bad-stinky"
                />
            </ul>
        </div>
    );
};



const StatisticsItem = (props) => {
    const {
        message = "your opinion matters to us!",
        icon = "logo",
    } = props;

    return (
        <li>
            <div>
                <SVG
                    width = "200"
                    height = "200"
                    name = {icon}
                />
                <p>{message}</p>
            </div>
        </li>
    );
    
};



// Statistics.propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     total: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired,
// };

StatisticsItem.propTypes = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}