const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
	try {
		const data = await knex("enjoys");
		res.status(200).json(data);
	} catch (err) {
		res.status(400).send(`Error retrieving enjoys: ${err}`);
	}
};

const removeUserEnjoys = async (req, res) => {
    try {
        const activityDeleted = await knex("enjoys")
            .where ({ id: req.params.id })
            .delete();
        if (activityDeleted === 0) {
            return res  
                .status(404).json({
                    message: `Unable to delete activity with Id ${req.params.id}`
                })
        }
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({
            message: `Unable to delete activity ${err}`
        })
    }
}

const find = async (req, res) => {
    try {
        const found = await knex("enjoys")
            .where({ "activity_name": req.params.Activity })
            .join("user", "user.id", "enjoys.user_id")
        res.json(found)          
    } catch (err) {
        res.status(500).json({
            message: `Unable to retrieve user matches for: ${req.params.Activity}`
        })
    }
}

module.exports = {
    index,
    removeUserEnjoys,
    find,
}