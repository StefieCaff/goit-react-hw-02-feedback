import { PropTypes } from 'prop-types';
import { SVG } from '../Logo/Icons'



export const Feedback = () => {

    return (
        <div>
            <h2>How was your espresso this time?!</h2>
            <ul>
                <FeedbackItem
                    message="My espresso was, FIRE!"
                    description="good"
                    icon = "fire"
                />
                <FeedbackItem
                    message="My espresso was, MEH."
                    description="neutral"
                    icon ="meh"
                />
                <FeedbackItem
                    message="My espresso was bad, STINKY!"
                    description="bad"
                    icon ="stinky"
                />
            </ul>
        </div>
    );
};

const FeedbackItem = (props) => {
    const {
        message = "your opinion matters to us!",
        description = " good, neutral, or bad",
        icon = "logo",
    } = props;

    return (
        <li>
            <div>
                <button>{description}
                    <SVG
                        width="100"
                        height="100"
                        name={icon}
                    />
                </button>
            </div>
            <div>
                <p>{message}</p>
            </div>
        </li>
    );
};

FeedbackItem.propTypes = {
    description: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

// Feedback.propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
// }

// ({
//     good = 0,
//     neutral = 0,
//     bad = 0
// })