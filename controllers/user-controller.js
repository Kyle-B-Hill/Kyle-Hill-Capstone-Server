const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
	try {
		const data = await knex("user");
		res.status(200).json(data);
	} catch (err) {
		res.status(400).send(`Error retrieving users: ${err}`);
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

const add = async (req, res) => {
    const formData = req.body;
    let errors = [];
    for (const input in formData) {
        let emptyError = false;
        if (!formData[input]) {
            errors.push("All fields are required.");
            break;
        }
    }

    if (formData.contact_phone) {
		if (!validatePhone(formData.contact_phone)) {
			errors.push("Invalid Phone Number");
		}
	}

    if (formData.contact_email) {
		if (!validateEmail(formData.contact_email)) {
			errors.push("Invalid Email.");
		}
	}

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const result = await knex("user").insert(req.body);
        const newUserId = result[0];
        const createdUser = await knex("user").where({ id: newUserId });

        res.status(201).json(createdUser);
    } catch (err) {
        res.status(500).json({
            message: `Unable to create new user: ${err}`
        });
    }
};

const update = async (req, res) => {
    try {
        const rowsUpdated = await knex("user")
            .where({ id: req.params.id })
            .update(req.body);
        if (rowsUpdated === 0) {
            return res.status(404).json({
                message: `User with Id ${req.params.id} not found` 
            })
        }
        const updatedUser = await knex("user")
            .where({ id: req.params.id });
        res.json(updatedUser[0]);
    } catch (err) {
        res.status(500).json({
            message: `Unable to update user with Id ${req.params.id}: ${err}`
        });
    }
};

const remove = async (req, res) => {
    try {
        const rowsDeleted = await knex("user")
            .where ({ id: req.params.id })
            .delete();
        if (rowsDeleted === 0) {
            return res  
                .status(404)
                .json({
                    message: `User with Id ${req.params.id} not found`
                });
        }
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({
            message: `Unable to delete user with Id ${req.params.id}: ${err}`
        })
    }
};

const userEnjoys = async(req, res) => {
    try {
        const enjoyedActivities = await knex("user").select(
            "enjoys.id",
            "activity_name"
        )
            .where({ 'enjoys.user_id': req.params.id })
            .join("enjoys", "enjoys.user_id", "user.id");
        res.json(enjoyedActivities)
    } catch (err) {
        res.status(500).json({
            message: `Unable to retrieve enjoyed activities for user with Id ${req.params.id}: ${err}`
        })
    }
}

const addUserEnjoys = async (req, res) => {
    try {
        // front end has to send user_id as part of the req.body, use state
        const result = await knex ("enjoys").insert(req.body);
        const newActivityId = result[0];
        const createdItem = await knex("enjoys").where({ id: newActivityId });
        res.status(201).json(createdItem);
    } catch(err) {
        res.status(500).json({
            message: `Unable to create new activity: ${err}`
        })
    }
};

const findPalominos = async(req, res) => {
    try {
        const foundPalominos = await knex("user")
            .where({ 'palominos.user_id': req.params.id })
            .join("palominos", "palominos.user_id", "user.id");
        res.json(foundPalominos)
    } catch (err) {
        res.status(500).json({
            message: `Unable to retrieve palominos for user with Id ${req.params.id}: ${err}`
        })
    }
}

const login = async(req, res) => {
    try {
        const user = await knex("user")
            .where({ 
                "user.user_name": req.body.user_name,
                "user.password": req.body.password
            })
        if(user.length > 0) {
           res.status(200).json(user); 
        } else {
            res.status(400).json({
                message: `Unable to login user`
            })
        }
    } catch (err) {
        res.status(500).json({
            message: `Server error ${err}`
        })
    }
}
module.exports = {
    index,
    findOne,
    add,
    update,
    remove,
    userEnjoys,
    addUserEnjoys,
    findPalominos,
    login,
}