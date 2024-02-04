const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
    try {
        const data = await knex("palominos");
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(`Error retrieving Palominos: ${err}`)
    }
}

const add = async (req, res) => {
    try {
        // front end has to send user_id and palominos_id as part of the req.body, use state
        const result = await knex ("palominos").insert(req.body);
        const newPalominoId = result[0];
        const createdItem = await knex("palominos").where({ id: newPalominoId });
        res.status(201).json(createdItem);
    } catch(err) {
        res.status(500).json({
            message: `Unable to create new Palomino: ${err}`
        })
    }
};

const findPalominos = async (req, res) => {
    try {
        const foundPalominos = await knex("palominos as p1")
            .where({ 'p1.user_id': req.params.id })
            .join(
                "palominos as p2",
                "p1.palominos_id",
                "p2.user_id"
            )
            .join("user", "user.id", "p2.user_id")
        res.status(200).json(foundPalominos);
    } catch (err) {
        res.status(500).json({
            message: `Unable to retrieve palominos for user with Id ${req.params.id}: ${err}`,
        });
    }
}

module.exports = {
    index,
    add,
    findPalominos,
}