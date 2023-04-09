//import PropTypes from 'prop-types';

import { SVG } from '../Logo/Icons'

const Logo = () => {
 
    return (
        <div>
            <SVG
            width = "25"
            height = "25"
            name = "logo" />
        </div>  
    );
   
};

const LogoTitle = () => {

    return (
        <div>
            <SVG
                width = "50"
                height = "50"
                name = "logo" 
            />
            <p>Espresso Cafe</p>
        </div>
    );
};

export  {Logo, LogoTitle }