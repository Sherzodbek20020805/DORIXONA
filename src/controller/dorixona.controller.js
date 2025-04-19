import { isValidObjectId } from "mongoose";
import dorixonaModel from "../models/dorixona.model.js";
import { BaseException } from "../exception/base.exception.js";

const getAlldorixona = async (req, res, next) => {
  try {
    const categories = await dorixonaModel.find()
      .populate("dorilar", "-dorixona -createdAt -updatedAt")
      // .select("-createdAt -updatedAt");

    res.send({
      message: "success",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};



const getOnedorixona = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const dorixona = await dorixonaModel.findById(id).populate("dorilar");

    if (!dorixona) {
      throw new BaseException(`dorixona with ID: ${id} not found`, 404);
    }

    res.send({
      message: "success",
      data: dorixona,
    });
  } catch (error) {
    next(error);
  }
};

const createdorixona = async (req, res, next) => {
  try {
    const { nomi, manzil, lokatsiya, ishVaqti, aloqa } = req.body;

    const dorixona = await dorixonaModel.create({
      nomi,
      manzil,
      lokatsiya,
      ishVaqti,
      aloqa,
    });

    res.send({
      message: "success",
      data: dorixona,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updatedorixona = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nomi, manzil, lokatsiya, ishVaqti, aloqa } = req.body;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const updateddorixona = await dorixonaModel.findByIdAndUpdate(
      id,
      { nomi, manzil, lokatsiya, ishVaqti, aloqa },
      { new: true }
    );

    res.send({
      message: "success",
      data: updateddorixona,
    });
  } catch (error) {
    next(error);
  }
};

const deletedorixona = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const dorixona = await dorixonaModel.findByIdAndDelete(id);

    res.send({
      message: "success",
      data: dorixona,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAlldorixona,
  createdorixona,
  getOnedorixona,
  updatedorixona,
  deletedorixona,
};
  

