const mongoose = require('mongoose');
const Recipe = mongoose.model('recipes');

module.exports = (app) => {

    app.get(`/api/recipes`, async (req, res) => {
        let recipes = await Recipe.find();
        return res.status(200).send(recipes);
    });

    app.post(`/api/recipes`, async (req, res) => {
        let recipe = await Recipe.create(req.body);
        return res.status(201).send({
            error: false,
            recipe
        })
    })

    app.delete(`/api/recipes/:id`, async (req, res) => {
        const { id } = req.params;

        let recipe = await Recipe.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            recipe
        })

    })

}