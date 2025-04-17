import { isValidObjectId } from "mongoose";
import DorixonaModel from "../models/dorixona.model.js";
import { BaseException } from "../exception/base.exception.js";

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await DorixonaModel.find().populate("dorilar");

    res.send({
      message: "success",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

const getOneCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const category = await DorixonaModel.findById(id).populate("dorilar");

    if (!category) {
      throw new BaseException(`Category with ID: ${id} not found`, 404);
    }

    res.send({
      message: "success",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { nomi, manzil, lokatsiya, ishVaqti, aloqa } = req.body;

    const category = await DorixonaModel.create({
      nomi,
      manzil,
      lokatsiya,
      ishVaqti,
      aloqa,
    });

    res.send({
      message: "success",
      data: category,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nomi, manzil, lokatsiya, ishVaqti, aloqa } = req.body;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const updatedCategory = await DorixonaModel.findByIdAndUpdate(
      id,
      { nomi, manzil, lokatsiya, ishVaqti, aloqa },
      { new: true }
    );

    res.send({
      message: "success",
      data: updatedCategory,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const category = await DorixonaModel.findByIdAndDelete(id);

    res.send({
      message: "success",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllCategories,
  createCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
