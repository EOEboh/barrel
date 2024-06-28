import React, { Fragment, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import styled from "styled-components";
import GenericLoader from "../lib/loaders/GenericLoader";
import dayjs from "dayjs";
import CardDropdown from "../components/others/CardDropdown";
import Link from "next/link";
import Title from "../lib/styled-components";
import CreateDialog from "./others/CreateDialog";

const OrderListMarkup = ({ orders = [], onDeleteOrder }) => {
  return orders ? (
    <div>
      <GridContainer>
        {orders.length ? (
          orders.map((order) => (
            <Card
              key={order.id}
              style={{
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FlexContainer icon>
                <Button variant="ghost" size="icon">
                  <CardDropdown
                    purchaseId={order.id}
                    onDeleteOrder={onDeleteOrder}
                  />
                </Button>
              </FlexContainer>
              <CardHeader>
                <FlexContainer>
                  <CardTitle>{order.name}</CardTitle>
                  <Badge variant="destructive">{order.status}</Badge>
                </FlexContainer>
                <CardDescription
                  style={{ fontSize: "0.75em", fontWeight: 700 }}
                >
                  {dayjs(order.orderDate).format("DD-MM-YYYY")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {order.items.map((item) => (
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
                    ${Intl.NumberFormat("en-us").format(order.totalAmount)}
                  </span>
                </FlexContainer>
                <FlexContainer>
                  <CardDescription>Supplier:</CardDescription>
                  <span>{order.supplier}</span>
                </FlexContainer>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">
                  <Link href={`/order/${order.id}`}>View</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div>No Purchase Orders Made Yet</div>
        )}
      </GridContainer>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

const OrderList = () => {
  const [refresh, setRefresh] = useState("");

  return (
    <div>
      <Title>Orders</Title>
      <FlexContainer2>
        <CreateDialog refresh={refresh} onCreateOrder={setRefresh} />
      </FlexContainer2>

      <GenericLoader
        url={"/api/v1/orders"}
        dataProp={"orders"}
        refresh={refresh}
      >
        <OrderListMarkup onDeleteOrder={setRefresh} />
      </GenericLoader>
    </div>
  );
};

export default OrderList;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;
  padding: 2px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(prop) => (prop.icon ? "flex-end" : "space-between")};
`;

const FlexContainer2 = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem 0.5rem 0;
`;
