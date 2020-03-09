const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");

fs.readdir("uploads", err => {
  if (err) {
    console.log("uploads 폴더 생성");
    fs.mkdirSync("uploads");
  }
});
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      //목적지
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      //파일명
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
  }), //디스크 스토리지에 저장
  limits: { fileSize: 5 * 1024 * 1024 } //파일 사이즈 제한
});

router.post("/img", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.end("file upload ok");
});

module.exports = router;
