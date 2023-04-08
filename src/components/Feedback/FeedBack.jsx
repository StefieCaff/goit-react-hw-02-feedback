import { PropTypes } from 'prop-types';

export const Feedback = ({
    good = 0,
    neutral = 0,
    bad = 0
}) => {

    return (
        <div>
            <h2>Espresso Cafe Customer FeedBack</h2>
            <ul>
                <li>
                    <button>
                        
                    </button>
                    <p>My coffee was good, fire!</p>
                    <p>{good}</p>
                </li>
                <button>
                    
                    </button>
                    <p>My coffee was, meh.</p>
                    <p>{neutral}</p>
                <li>
                </li>
                <li>
                    <button>
                        
                    </button>
                    <p>My coffee was bad, stinky!</p>
                    <p>{bad}</p>
                </li>
            </ul>
        </div>

    )
}

Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
}