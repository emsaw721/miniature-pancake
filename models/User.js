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
        match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/]
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
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ], 
            // keep track of id associated with friends --> more common to store a string instead of this way 
}, {
    toJSON: {
        virtuals: true, 
        getters: true
    },
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length; 
}); 

const User = model('User', userSchema); 

module.exports = User; 