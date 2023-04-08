import PropTypes from 'prop-types';

import { SVG } from '../Logo/Icons'

const Logo = (props) => {
    const {
        width,
        height,
        name = "logo"
    } = props;

    return (
        <div>
            <SVG
                width = {width}
                height = {height}
                name = {name}
            />
        </div>  
    );
   
};

const LogoTitle = () => {

    return (
        <div>
            <SVG />
            <p>Espresso Cafe</p>
        </div>
    );
};

Logo.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string
}

export  {Logo, LogoTitle }