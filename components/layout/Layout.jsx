import React from "react";
import Sidebar from "../sections/Sidebar";
import NavMenu from "../sections/NavMenu";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div>
      <NavMenu />
      <FlexContainer>
        <Sidebar />
        <Main>{children}</Main>
      </FlexContainer>
    </div>
  );
};

export default Layout;

const FlexContainer = styled.div`
  display: flex;
  padding: 0 1rem 0.5rem 0;
`;

const Main = styled.div`
  margin-left: 250px;
  flex: 1;
  padding: 20px;
  overflow: hidden;
`;
