const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const userScheme = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
        pwd: { type: String, required: true },
        role: { type: ["USER", "ADMIN"], default: "USER" }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

userScheme.plugin(mongooseDelete, { overrideMethods: 'all'}); //con este plugin se puede hacer soft delete
module.exports = mongoose.model("users", userScheme);