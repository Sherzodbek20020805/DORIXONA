import { Router } from "express";
import dorixonaModel from "../models/dorixona.model.js";
import doriModel from "../models/dori.model.js";

const pageRouter = Router();

pageRouter.get("/", async (req, res) => {
  const { category = "all" } = req.query;

  const dorixona = await dorixonaModel.find().populate("dorilar");
  const dori = await doriModel.find();
  const allDorixona = {
    _id: "all",
    nomi: "All",
    dorilar:dori,
    isActive: true,
  };

  const categoryRes = [allDorixona, ...dorixona];
  let doriRes = dori;

  categoryRes.forEach((r) => {
    console.log(r);

    if (r._id == category) {
      r.isActive = true;
      doriRes = r.dorilar;
    } else {
      r.isActive = false;
    }
  });
  console.log(doriRes);

  res.render("index", { dorixona: categoryRes, dori: doriRes });
});

pageRouter.get("/users/login", (req, res) => {
  res.render("login", { error: null });
});

pageRouter.get("/users/register", (req, res) => {
  res.render("register", { error: null });
});

pageRouter.get("/users/forgot-password", (req, res) => {
  res.render("forgot-password", { error: null, message: null });
});

pageRouter.get("/users/reset-password", (req, res) => {
  const { token } = req.query;
  res.render("reset-password", { error: null, message: null, token });
});

export default pageRouter;
