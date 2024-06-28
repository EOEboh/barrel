import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarHeader>Dashboard</SidebarHeader>
        <LinkContainer>
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>Requisitions</div>
          <div>Purchase Orders</div>
          <div>Invoices</div>
        </LinkContainer>
        <SidebarFooter>&copy; 2024 Your Company</SidebarFooter>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarHeader = styled.h2`
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  font-size: 0.9rem;
  text-align: center;
  color: #bbb;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
