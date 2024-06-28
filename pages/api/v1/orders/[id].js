import {
  getPurchaseOrderById,
  updatePurchaseOrder,
  deletePurchaseOrder,
} from "../../../../lib/purchaseOrders";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const order = await getPurchaseOrderById(id);
    if (order) {
      res.status(200).json({
        success: true,
        data: order,
        message: "Purchase order retrieved successfully.",
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Purchase order not found!" });
    }
  } else if (req.method === "PUT") {
    const updatedOrder = await updatePurchaseOrder(id, req.body);
    if (updatedOrder) {
      res.status(200).json({
        success: true,
        data: updatedOrder,
        message: "Purchase order updated successfully.",
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Purchase order not found!" });
    }
  } else if (req.method === "DELETE") {
    const deleted = await deletePurchaseOrder(id);
    if (deleted) {
      res.status(200).json({
        success: true,
        message: "Purchase order deleted successfully.",
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Purchase order not found!" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed!" });
  }
}
