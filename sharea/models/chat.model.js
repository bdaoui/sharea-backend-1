const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const chatSchema = new Schema(
  {
    name: String,
    messages: []
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Chat = model("Chat", chatSchema);

module.exports = Chat;
