import styled from 'styled-components'

const colors = {
    grey: '#646464',
};

export const StyledH2 = styled.h2`
    margin-top: 0;
    padding-top: 25px;
    colors: ${props => props.color};
    background: linear-gradient(#e0e0e0, #ffffff);
`;