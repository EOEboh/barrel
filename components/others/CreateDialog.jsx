import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function CreateDialog({ onCreateOrder }) {
  const [open, setOpen] = useState(false);
  console.log("open", open);

  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState("");
  console.log("response", response);

  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
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
      const response = await fetch("/api/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response error");
      } else if (response.ok) {
        setOpen(false);
      }

      const result = await response.json();
      // console.log(result);
      setResponse(result);
      onCreateOrder(result);
    } catch (error) {
      console.error("There was a problem with the request", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create A Purchase Order</DialogTitle>
            <DialogDescription>
              Fill up the fields below and submit when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <Button type="submit">
              {isLoading ? "..." : response ? "Done" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const styling = {
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
