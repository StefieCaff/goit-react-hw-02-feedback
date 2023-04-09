import { PropTypes } from 'prop-types';
import { SVG } from '../Logo/Icons'


 
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <div>
            {Object.keys(options).map(option => (
                <button
                    key={option}
                    type="button"
                    name={option}
                    onClick={ onLeaveFeedback }
                >
                    {option}
                    <SVG
                        width="25"
                        height="25"
                        name={option}
                    />
                </button>
            ))}
        </div>
    )
};


FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};