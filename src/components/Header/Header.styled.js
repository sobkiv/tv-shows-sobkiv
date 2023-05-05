import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  text-align: center;
  margin: -40px 0 40px;
  background-color: ${({ theme }) => theme.mainColors.green};
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    color: ${({ theme }) => theme.mainColors.dark};
    position: relative;
    top: 5px;
    left: 33px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 15px;
  }

  img {
    width: 2.2%;
    position: relative;
    left: 40px;
    top: -2px;
    filter: invert(92%);
  }
`;
