import {
  getPurchaseOrders,
  createPurchaseOrder,
} from "../../../../lib/purchaseOrders";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const orders = await getPurchaseOrders();
    res.status(200).json({
      success: true,
      data: orders,
      message: "Purchase orders retrieved successfully.",
    });
  } else if (req.method === "POST") {
    const newOrder = await createPurchaseOrder(req.body);
    res.status(201).json({
      success: true,
      data: newOrder,
      message: "Purchase order created successfully.",
    });
  } else {
    res.status(405).json({ success: false, message: "Method not allowed." });
  }
}
