const multer = require('multer')
const path = require("node-path")
const absolutePath = path.resolve('./')

const uploadPostImage = (destination) => {
    const upload = multer({ dest: destination })
    return upload
}


module.exports = uploadPostImage