import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
        <h2> {title}</h2>
        <p>If you want to, add to the tally. We'd love the feedforward! </p>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};