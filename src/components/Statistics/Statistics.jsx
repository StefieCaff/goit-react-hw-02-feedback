import { PropTypes } from 'prop-types';

import { icons } from '../../data/icons';
import { Icon } from '../Logo/Icons';

export const Statistics = ({
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivePercentage = 0
}) => {
    
    return (
        <div>
            <div className="good">
                {icons.map((id) => {
                    return <Icon key={id} id={id} />;
                    })}
            </div>
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