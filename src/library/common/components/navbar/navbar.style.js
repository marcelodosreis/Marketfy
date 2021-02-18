import Styled from 'styled-components';

const Header = Styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
    & > div {
      display: flex;
      & > ul {
      display: flex;
      list-style-type: none;
      & >  li {
        margin-right: 30px;
        cursor: pointer;
      }
    }
  }
`;

export { Header };
