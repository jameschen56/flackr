const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();

const { Image } = require('../../db/models')
const { validateCreate, validateUpdate } = require('../../utils/validation')

// Get all the images
router.get('', asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    console.log('images', images)
    res.json(images)
}))

// Get a single image 
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const image = await Image.findByPk(id);
    res.json(image)
}))

// Create an image 
router.post('', validateCreate, asyncHandler(async (req, res) => {
    const image = await Image.create(req.body);
    res.json(image)
}))

// Delete an image
router.delete('/:id', asyncHandler(async (req, res) => {
    console.log("reqBody", req.body)
    
    const id = parseInt(req.params.id, 10);
    const image = await Image.findByPk(id);
    await image.destroy();
    return res.json(image);
}));

// Update an image
router.put('/:id', validateUpdate, asyncHandler(async (req, res) => {
    console.log(req.body)
    const id = parseInt(req.params.id, 10);
    const image = await Image.findByPk(id);
    console.log(image);
    await image.update({
      id: req.body.image.id,
      userId: req.body.image.userId,
      imageUrl: req.body.image.imageUrl,
      description: req.body.image.description
    });
    await image.save();
    return res.json(image);
}));

module.exports = router;




