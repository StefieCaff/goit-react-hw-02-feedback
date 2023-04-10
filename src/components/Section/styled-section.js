import styled from 'styled-components';

const SectionWrapper = styled.div`
    margin: 30px 10px;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    background: rgba(228, 84, 84, 0.12);
    border: 1px solid rgba(228, 84, 84, 1);
    border-radius: 3px;
    box-shadow: 1px 11px 35px -5px rgba(0,0,0,0.66);
    -webkit-box-shadow: 1px 11px 35px -5px rgba(0,0,0,0.66);
    -moz-box-shadow: 1px 11px 35px -5px rgba(0,0,0,0.66);
`;

const SectionHeader = styled.h2`
    font-size: 20px;
    color: rgba(91, 91, 91, 0.9);
    margin-bottom: 20px;
`

export { SectionWrapper, SectionHeader };