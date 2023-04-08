import PropTypes from 'prop-types';
import sprite from '../../images/icons.svg';

export const SVG = (props) => {
const {
    width = "100",
    height = "100",
    name = "logo"
} = props
        
    return (
        <svg width={width} height={height}>
            <use href={`${sprite}#${name}`}></use>
        </svg>
    )
};

SVG.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string
}