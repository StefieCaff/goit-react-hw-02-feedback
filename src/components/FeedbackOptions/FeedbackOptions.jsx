import { PropTypes } from 'prop-types';
import { SVG } from '../Logo/Icons'
 
export const FeedbackOptions = (props) => {
    const {
        good = "good",
        neutral= "neutral",
        bad = "bad",
        onGoodFeedback,
        onNeutralFeedback,
        onBadFeedback
    } = props

    return (
        <div>
            <button
                type="button"
                name={good}
                onClick={onGoodFeedback}
            >
                Good
                <SVG
                    width="25"
                    height="25"
                    name="good"
                />
            </button>
            <button
                type="button"
                name={neutral}
                onClick={onNeutralFeedback}
            >
                Meh
                <SVG
                    width="25"
                    height="25"
                    name="neutral"
                />
            </button>
            <button
                type="button"
                name={bad}
                onClick={onBadFeedback}
            >
                Bad
                <SVG
                    width="25"
                    height="25"
                    name="bad"
                />
            </button>
        </div>
    )
};


FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onGoodFeedback: PropTypes.func.isRequired,
    onNeutralFeedback: PropTypes.func.isRequired,
    onBadFeedback: PropTypes.func.isRequired
};