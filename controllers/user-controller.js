const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
	try {
		const data = await knex("user").select(
            "id",
            "user_name",
            "city",
            "password",
            "email",
            "gender",
            "bio",
            "age"
			
		);
		res.status(200).json(data);
	} catch (err) {
		res.status(400).send(`Error retrieving Warehouses: ${err}`);
	}
};


const findOne = async (req, res) => {
    try {
        const userFound = await knex("user").where({
            id: req.params.id,
        });
        if (userFound.length === 0) {
            return res.status(404).json({
                message: `User with Id ${req.params.id} not found`
            });   
        }
        const userData = userFound[0];
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({
            message: `Unable to retrieve user with Id ${req.params.id}`
        });
    }
}

module.exports = {
    index,
    findOne,
}