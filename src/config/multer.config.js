import { join, extname } from "node:path";
import { existsSync, mkdirSync } from "node:fs";
import multer from "multer";


const uploadDir = join(process.cwd(), "uploads");
if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const ext = extname(file.originalname); // .jpg, .png va hokazo
    const uniqueName = file.fieldname + "-" + Date.now() + ext;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });
