import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditOrder = ({ purchaseId, singleOrderData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState("");
  console.log("response", response);

  const [formData, setFormData] = useState({
    name: singleOrderData?.data.name ?? "",
    quantity: singleOrderData?.data.quantity ?? 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formData", formData);

    setIsLoading(true);

    try {
      const response = await fetch(`/api/v1/orders/${purchaseId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response error");
      }

      const result = await response.json();
      // console.log(result);
      setResponse(result);
      //   onCreateOrder(result);
    } catch (error) {
      console.error("There was a problem with the request", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div style={styling.parent}>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            margin: "0.5rem 0",
          }}
        >
          <div style={styling.nameSection}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styling.input}
            />
          </div>
          <div style={styling.qtySection}>
            <Label htmlFor="username">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              style={styling.input}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button type="submit">
            {isLoading ? "..." : response ? "Done" : "Update"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditOrder;

const styling = {
  parent: { margin: "auto", width: "50%" },
  nameSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  qtySection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "0.7rem",
  },
  input: {
    background: "#f6f6f6",
  },
};
