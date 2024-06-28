import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import GenericLoader from "../lib/loaders/GenericLoader";
import dayjs from "dayjs";
import OrderSummary from "./others/OrderSummary";

const OrderDetailsMarkup = ({ singleorder = [] }) => {
  return singleorder ? (
    <Main>
      <FlexContainer>
        <div>
          Order ID <code>#{singleorder.id}</code>
        </div>

        <Badge variant="destructive">Processing</Badge>
      </FlexContainer>
      <GridContainer>
        <GridItem>
          <Card
            style={{
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardHeader>Progress Status</CardHeader>
            <CardContent>
              <FlexContainer column>
                <FlexContainer>
                  <Badge variant="outline">{singleorder.supplier}</Badge>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Badge variant="outline">Buyer</Badge>
                </FlexContainer>
                <Progress value={60} />
              </FlexContainer>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            style={{
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardHeader>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </CardHeader>
            <CardContent>
              <FlexContainer column>
                <div>Estimated Arrival</div>
                <div>9th July, 2024</div>
              </FlexContainer>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem>
          <Card
            style={{
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardHeader>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </CardHeader>
            <CardContent>
              <FlexContainer column>
                <div>Delivered in:</div>
                <div>5 Days</div>
              </FlexContainer>
            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer2>
        <Card
          style={{
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardHeader>
            <FlexContainer>
              <CardTitle>{singleorder.name}</CardTitle>
              {/* <Badge variant="secondary">{order.status}</Badge> */}
            </FlexContainer>
            <CardDescription style={{ fontSize: "0.75em", fontWeight: 700 }}>
              {dayjs(singleorder.orderDate).format("DD-MM-YYYY")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {singleorder.items.map((item) => (
              <FlexContainer key={item.id}>
                <CardDescription>Price:</CardDescription>
                <span>
                  ${item.unitPrice} x {item.quantity}
                </span>
              </FlexContainer>
            ))}

            <FlexContainer>
              <CardDescription>Total:</CardDescription>
              <span>
                ${Intl.NumberFormat("en-us").format(singleorder.totalAmount)}
              </span>
            </FlexContainer>
            <FlexContainer>
              <CardDescription>Supplier:</CardDescription>
              <span>{singleorder.supplier}</span>
            </FlexContainer>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card
          style={{
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>
              Here&apos;s a summary of your purchase order
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OrderSummary />
          </CardContent>
        </Card>
      </GridContainer2>
    </Main>
  ) : (
    <h1>Loading...</h1>
  );
};

const OrderDetails = ({ purchaseId = "" }) => {
  return (
    <GenericLoader
      url={`/api/v1/orders/${purchaseId}`}
      dataProp={"singleorder"}
    >
      <OrderDetailsMarkup />
    </GenericLoader>
  );
};

export default OrderDetails;

const Main = styled.div`
  border: 1px solid black;
  padding: 1rem 0.5rem;
  border-radius: 0.75rem;

  @media (max-width: 768px) {
    border: none;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
  padding: 2px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border: none;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(prop) => (prop.icon ? "flex-end" : "space-between")};
  flex-direction: ${(prop) => (prop.column ? "column" : "row")};
  gap: ${(prop) => (prop.column ? "1rem" : "")};
`;
