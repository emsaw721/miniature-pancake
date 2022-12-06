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
            //280 character max
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

const thoughSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        // must be between 1-280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {

    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

thoughSchema.virtual('reactionCount').get(function() {
    return this.reactions.length; 
});

const Thought = model('Thought', thoughSchema);
module.exports = Thought; 
