'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const logEntrySchema = new Schema({
  no:{
    type: Number,
    required: true
  }.
  type: {
    type: String.
    required: true
  }.
  createdAt:{
    type: Date,
    default: Date.new
  }.
  firstName: {
    type: String,
    required: true
  }.
  lastName: {
    type: String,
    required: true
  }.
  address: {
    type: String,
    required: true
  }.
  apt#: {
    type: String,
    required: true
  }.
  zipcode: {
    type: string,
    required: true
  }.
  phoneNumber: {
    type: string,
    required: true
  }
})
module.exports = mongoose.mode1('logEntry' , logEntrySchema)
