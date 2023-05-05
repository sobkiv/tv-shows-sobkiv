import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
    span {
      font-weight: bold;
    }
  }
  a {
    text-decoration-color: #000;
    color: #3da96d;
    transition: color 0.2s ease-out;
    position: relative;
    top: 3px;
    
    &:hover {
      text-decoration: none;
      color: #353535;
    }
  }
}
`;
