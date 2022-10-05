import multer from "multer";

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, './images')
        },
        filename: (req, file, callback) => {
          const fname = file.originalname.split('.').slice(0,-1).join('.')
          const ext = file.originalname.split('.').slice(-1)[0]
          const tm = new Date().getTime()
          callback(null, fname+'.'+tm+'.'+ext);
        }
      }),
    fileFilter: (req, file, cb) => {
        // console.log(file.originalname);
        if (file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "application/pdf") {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error("Only .png, .jpg, .jpeg and .pdf format allowed"))
        }
    },
    limits: { fileSize: 1 * 1024 * 1024 }
}).fields([{name : 'file'},{name : 'foto'}])

export default {
    upload
}