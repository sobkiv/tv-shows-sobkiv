import styled from 'styled-components';

export const HomeButtonWripper = styled.div`
	position: relative;
	right: 25px;
	a {
    text-decoration: none;
  }
	
  div {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.green};
    padding: 9px 15px;
    letter-spacing: 2px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    transition: background-color 0.3s ease-out;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.mainColors.dark};
    }
  }
`;
