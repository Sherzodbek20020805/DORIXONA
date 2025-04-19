import express from "express";
import {
  createOrderItem,
  getAllOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
} from "../controller/orderItem.controller.js";

const OrderItemrouter = express.Router();

OrderItemrouter
.post("/", createOrderItem)
.get("/", getAllOrderItems)
.get("/:id", getOrderItemById)
.put("/:id", updateOrderItem)
.delete("/:id", deleteOrderItem);

export default OrderItemrouter;
