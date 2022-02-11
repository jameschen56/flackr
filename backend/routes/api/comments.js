const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')

const { User, Comment} = require(`../../db/models`)

router.get('/:id', asyncHandler(async(req, res) => {
    const { id } = req.params
    const comments = await Comment.findAll({
        where: {imageId: id},
        include: User
    });
    return res.json(comments)
}));


module.exports = router;