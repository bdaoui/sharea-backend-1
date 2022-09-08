const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const imageSchema = new Schema(
  {
    name: String,
    image: String,
    comments: [],
    tags: []
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Image = model("Image", imageSchema);

module.exports = Image;
