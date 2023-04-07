import { PropTypes } from 'prop-types';

import { icons } from '../../data/icons';
import { Icon } from '../../assets/Icons';


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
                        <Icon>
                        <div className="good">
                           {icons.map((id) => {
                               return <Icon key={id} id={id} />;
                            })}
                        </div>
                        </Icon>
                    </button>
                    <p>My coffee was good fire!</p>
                    <p>{good}</p>
                </li>
                <button>
                    <Icon>
                        <div className="neutral">
                           {icons.map((id) => {
                               return <Icon key={id} id={id} />;
                            })}
                        </div>
                    </Icon>
                    </button>
                    <p>My coffee was meh.</p>
                    <p>{neutral}</p>
                <li>
                </li>
                <li>
                    <button>
                        <Icon>
                            <div className="bad">
                               {icons.map((id) => {
                                   return <Icon key={id} id={id} />;
                                })}
                            </div>
                        </Icon>
                    </button>
                    <p>My coffee was bad stinky!</p>
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