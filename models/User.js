const { Schema, model } = require('mongoose'); 


const userSchema = new Schema({
    username: {
        type: String, 
        unique: true, 
        required: true, 
        trim: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        // mongoose matching validation 
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type:Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    toJSON: {
        virtuals: true, 
        getters: true
    },
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + friend.length + 1, 0); 
}); 

userSchema.path('email').validate(function(email) {
    var emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/; 
    return emailRegex.test(email.text);
}, 'The email field cannot be empty.')

const User = model('User', userSchema); 

module.exports = User; 