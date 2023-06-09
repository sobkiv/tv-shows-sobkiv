import styled from 'styled-components';
import { SearchCard } from '../../styled';

export const StyledShowCard = styled(SearchCard)`
  h1, p {
    display: flex;
    justify-content: center;
  }
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3da96d;
    a {
      text-decoration-color: #000;
      color: #3da96d;
      &:hover {
        text-decoration: none;
        color: #c6c6c6;
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
