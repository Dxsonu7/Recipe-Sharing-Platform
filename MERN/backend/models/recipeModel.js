const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    preparationSteps: {
        type: String,
        required: true
    }
}, {timestamps: true} )

module.exports = mongoose.model('Recipe', recipeSchema)