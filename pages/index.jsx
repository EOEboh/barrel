import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import SubLayout from "@/components/sub-layout/SubLayout";
import OrderList from "@/components/OrderList";
import StatusNav from "@/components/StatusNav";

const Home = () => {
  return (
    <div>
      <Layout>
        <SubLayout>
          <StatusNav />
          <OrderList />
        </SubLayout>
      </Layout>
    </div>
  );
};

export default Home;
