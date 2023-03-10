const mongoose = require("mongoose");

const { Schema } = mongoose;

var categoriesFoods = new Schema(
  {
    foodCategoryName: {
      type: String,
      required: true,
      min: 3,
    },
    brandID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    foodCategoryDescription: {
      type: String,
      required: true,
      min: 3,
    },
    foodCategoryImage: {
      type: String,
      required: true,
      min: 3,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const categoriesFood = mongoose.model("FoodCategory", categoriesFoods);

exports.categoriesFood = categoriesFood;
