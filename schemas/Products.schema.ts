import { Schema, model, models, Model } from "mongoose";
import { ChangeEvent } from "react";
import { ProdDTO } from "../dto/Products.dto";
import { UserDto } from "../dto/user.dto";
import { Session } from "inspector";
const mongoose = require('mongoose');
const searchPlugin = require('mongoose-search-plugin');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

productSchema.plugin(searchPlugin, {
  fields: ['name', 'description', 'category']
});

module.exports = mongoose.model('Product', productSchema);
