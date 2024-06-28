import React from "react";
import Layout from "../../../components/layout/Layout";
import Title from "../../../lib/styled-components";
import EditOrder from "../../../components/EditOrder";
import { useRouter } from "next/router";

const EditOrderPage = ({ singleOrderData }) => {
  console.log("singleOrderData", singleOrderData);
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Title>Edit Purchase Order</Title>
      <EditOrder purchaseId={id} singleOrderData={singleOrderData} />
    </Layout>
  );
};

export default EditOrderPage;

export async function getServerSideProps(context) {
  const singleOrder = await fetch(
    `http://localhost:3000/api/v1/orders/${context.params.id}`,
    {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const singleOrderData = await singleOrder.json();

  return {
    props: { singleOrderData },
  };
}
