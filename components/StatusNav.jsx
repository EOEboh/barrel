import React from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/button";

const StatusNav = () => {
  return (
    <FlexContainer>
      <Button variant="secondary" size={"sm"}>
        All
      </Button>
      <Button variant="secondary" size={"sm"}>
        Pending
      </Button>
      <Button variant="secondary" size={"sm"}>
        Processing
      </Button>
      <Button variant="secondary" size={"sm"}>
        Completed
      </Button>
    </FlexContainer>
  );
};

export default StatusNav;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
