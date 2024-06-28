const fs = require("fs");
const path = require("path");

const filePath = path.resolve(process.cwd(), "purchaseOrders.json");

// Helper function to read the JSON file
const readJSONFile = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

// Helper function to write to the JSON file
const writeJSONFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

const getPurchaseOrders = async () => {
  return readJSONFile();
};

const getPurchaseOrderById = async (id) => {
  const orders = readJSONFile();
  return orders.find((order) => order.id === id);
};

const createPurchaseOrder = async (data) => {
  const orders = readJSONFile();
  const newOrder = {
    id: generateUniqueId(),
    supplier: "Supplier Name",
    items: [
      {
        itemId: generateUniqueId(),
        description: "Item Description",
        quantity: 10,
        unitPrice: 50.0,
      },
    ],
    totalAmount: 500.0,
    orderDate: "2023-01-01T00:00:00Z",
    status: "Pending",
    ...data,
  };
  orders.push(newOrder);
  writeJSONFile(orders);
  return newOrder;
};

const updatePurchaseOrder = async (id, data) => {
  const orders = readJSONFile();
  const index = orders.findIndex((order) => order.id === id);
  if (index !== -1) {
    orders[index] = { ...orders[index], ...data };
    writeJSONFile(orders);
    return orders[index];
  }
  return null;
};

const deletePurchaseOrder = async (id) => {
  const orders = readJSONFile();
  const index = orders.findIndex((order) => order.id === id);
  if (index !== -1) {
    const deletedOrder = orders.splice(index, 1);
    writeJSONFile(orders);
    return deletedOrder;
  }
  return null;
};

const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

module.exports = {
  getPurchaseOrders,
  getPurchaseOrderById,
  createPurchaseOrder,
  updatePurchaseOrder,
  deletePurchaseOrder,
};
