import styled from "styled-components";

const LayoutStyled = styled.div`
  eight: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
