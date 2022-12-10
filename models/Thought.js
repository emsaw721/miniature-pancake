const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String, 
            required: true, 
            maxLength: 280
        },
        username: {
            type: String, 
            required: true
        },
        createdAt: {
            type: Date, 
            default: Date.now, 
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
); 

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1, 
        maxLength: 280
        // must be between 1-280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length; 
});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought; 
