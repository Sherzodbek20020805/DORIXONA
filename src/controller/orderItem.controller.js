import OrderItem from "../models/order-item.model.js";


// CREATE: yangi order item yaratish
export const createOrderItem = async (req, res) => {
  try {
    const { dori, order, quantity } = req.body;

    const newOrderItem = await OrderItem.create({ dori, order, quantity });
    res.status(201).json({ message: "Order item yaratildi", data: newOrderItem });
  } catch (err) {
    res.status(500).json({ message: "Order item yaratishda xatolik", error: err.message });
  }
};

// READ ALL: barcha order itemlar
export const getAllOrderItems = async (req, res) => {
  try {
    const items = await OrderItem.find()
      .populate("dori")
      .populate("order")
      .exec();

    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Ma'lumotlarni olishda xatolik", error: err.message });
  }
};

// READ ONE: ID bo‘yicha order item olish
export const getOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await OrderItem.findById(id)
      .populate("dori")
      .populate("order")
      .exec();

    if (!item) {
      return res.status(404).json({ message: "Order item topilmadi" });
    }

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Xatolik", error: err.message });
  }
};

// UPDATE: order itemni yangilash
export const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await OrderItem.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Order item topilmadi" });
    }

    res.status(200).json({ message: "Yangilandi", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Yangilashda xatolik", error: err.message });
  }
};

// DELETE: order itemni o‘chirish
export const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await OrderItem.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Order item topilmadi" });
    }

    res.status(200).json({ message: "O‘chirildi" });
  } catch (err) {
    res.status(500).json({ message: "O‘chirishda xatolik", error: err.message });
  }
};
