const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();

const { Image } = require('../../db/models')

// Get all the images
router.get('', asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    // console.log('images', images)
    res.json(images)
}))

// Get a single image 
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const image = await Image.findByPk(id);
    res.json(image)
}))

// Create an image 
router.post('', asyncHandler(async (req, res) => {
    const image = await Image.create(req.body);
    res.json(image)
}))




module.exports = router;