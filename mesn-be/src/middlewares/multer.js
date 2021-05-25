import multer from 'multer';

const storage = multer.diskStorage({
    destination: "uploads/img",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

export default multer({storage}).single("image");