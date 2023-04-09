import PropTypes from 'prop-types';


export const Notification = (props) => {

    const {
        message = "Be the first to add a tally! Woot!"
    } = props
    return (
        <p>
            {message}
        </p>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};