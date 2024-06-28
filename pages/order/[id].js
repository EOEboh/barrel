import React from "react";
import OrderDetails from "../../components/OrderDetails";
import Layout from "../../components/layout/Layout";
import Title from "../../lib/styled-components";
import { useRouter } from "next/router";

const ViewOrder = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Title>Order Details</Title>
      <OrderDetails purchaseId={id} />
    </Layout>
  );
};

export default ViewOrder;
