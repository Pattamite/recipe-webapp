const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: '',
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  unit: {
    type: String,
    required: true,
    default: '',
  },
  imagePath: {
    type: String,
    required: true,
    default: '',
  },
});

const stepSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    default: '',
  },
  warning: {
    type: String,
    required: true,
    default: '',
  },
  tip: {
    type: String,
    required: true,
    default: '',
  },
  imagePath: {
    type: String,
    required: true,
    default: '',
  },
});

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    default: '',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
    default: '',
  },
  shortDescription: {
    type: String,
    required: true,
    default: '',
  },
  description: {
    type: String,
    required: true,
    default: '',
  },
  difficulty: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5],
    default: 1,
  },
  estimatedMinutes: {
    type: Number,
    min: 0,
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true,
  },
  ingredients: [ingredientSchema],
  steps: [stepSchema],
  comments: [commentSchema],
});

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const recipeModel = mongoose.model('recipeModel', recipeSchema);

module.exports = recipeModel;
