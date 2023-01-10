
// this line imports the Mongoose library, which is used for interacting with MongoDB databases in Node.js.
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    leagues: [{
        type: Schema.Types.ObjectId,
        ref: "League"
    }],
    picks: {
        type: Object
    }
    //next time i would make picks its own model and each set of weeks would have a week, user, league and array of picks

}, { timestamps: true });


// this creates a temp var and grabs from the form what we called 'confirm password' and sets it to be later compared in the next function to password
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports.User = mongoose.model('User', UserSchema);

