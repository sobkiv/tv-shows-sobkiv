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
    &:hover {
      text-decoration: none;
      color: #353535;
    }
  }
  button {
    outline: none;
    border: 1px solid #8e8e8e;
    border-radius: 15px;
    padding: 5px 20px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
      cursor: pointer;
    }
  }
}
`;
