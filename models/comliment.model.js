const mongoose = require('mongoose')
const schema = mongoose.Schema

const ComlimentSchema = new schema({
    id: {type: Number},
    text: {type: String},
    sticker: {type: String}
})
 module.exports = mongoose.model('comliment', ComlimentSchema)