import { isValidObjectId } from "mongoose";
import dorixonaModel from "../models/dorixona.model.js";
import doriModel from "../models/dori.model.js";
import { BaseException } from "../exception/base.exception.js";

const getAlldorilar = async (req, res, next) => {
  try {
    const dorilar = await doriModel
      .find()
      .populate("dorixona", "-dorilar -createdAt -updatedAt")
      .select("-createdAt -updatedAt");

    res.send({
      message: "success",
      count: dorilar.length,
      data: dorilar,
    });
  } catch (error) {
    next(error);
  }
};




const getOnedori = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const dori = await doriModel
      .findById(id)
      .populate("dorixona", "-dorilar -createdAt -updatedAt")
      .select("-createdAt -updatedAt");

    if (!dori) {
      throw new BaseException(`dori with ID: ${id} not found`, 404);
    }

    res.send({
      message: "success",
      data: dori,
    });
  } catch (error) {
    next(error);
  }
};

const createdori = async (req, res, next) => {
  try {
    const { name, price, dorixona, description } = req.body;

    const foundeddorixona = await dorixonaModel.findById(dorixona);

    if (!foundeddorixona) {
      throw new BaseException(`dorixona with ID: ${dorixona} not found`, 400);
    }

    const fail=  req.file?.filename
    console.log(fail);
    
    const dori = await doriModel.create({
      name,
      price,
      dorixona,
      description,
      imageUrl: fail
         
    });
    console.log(dori);
    
    await dorixonaModel.updateOne(
      { _id: dorixona },
      { $push: { dorilar: dori._id } }
    );

    res.status(201).send({
      message: "success",
      data: dori,
    });
  } catch (error) {
    next(error);
  }
};

const updatedori = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const dori = await doriModel.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );

    if (!dori) {
      throw new BaseException(`dori with ID: ${id} not found`, 404);
    }

    res.send({
      message: "yangilandi",
      data: dori,
    });
  } catch (error) {
    next(error);
  }
};

const deletedori = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      throw new BaseException(`Given ID: ${id} is not valid Object ID`, 400);
    }

    const deleted = await doriModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new BaseException(`dori with ID: ${id} not found`, 404);
    }

    await dorixonaModel.updateOne(
      { _id: deleted.dorixona },
      { $pull: { dorilar: deleted._id } }
    );

    res.status(200).send({
      message: "o'chirildi",
      data: deleted,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAlldorilar,
  getOnedori,
  createdori,
  updatedori,
  deletedori,
};
