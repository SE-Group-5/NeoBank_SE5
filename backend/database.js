require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGO_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Connected to database");
		}
	}
);

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
	User: User,
};
