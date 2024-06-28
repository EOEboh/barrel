import React from "react";
import styled from "styled-components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavMenu = () => {
  return (
    <FlexContainer>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {" "}
        <Avatar>
          <AvatarImage src="#" alt="user avatar" />
          <AvatarFallback>UB</AvatarFallback>
        </Avatar>
        <h3>Username</h3>
      </div>
    </FlexContainer>
  );
};

export default NavMenu;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  margin-left: 250px;
  gap: 1rem;
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
