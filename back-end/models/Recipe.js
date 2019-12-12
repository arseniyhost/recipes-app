const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipeSchema = new Schema({
    id: Number,
    title: String,
    category: String,
    urlPhoto: String,
    description: String,
    Ingredients: [],
    instructions: []
})

mongoose.model('recipes', recipeSchema);