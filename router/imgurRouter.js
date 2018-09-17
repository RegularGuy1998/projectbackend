const express = require('express');
const imgurRouter = express.Router();
const fs = require('fs');
const imgur = require('imgur')


imgurRouter.post("/", (req, res) => {
    
    imgur.uploadBase64(req.body.base64)
        .then(link => res.send({success: 1, link}))
        .catch(err => res.status(500).send({success: 0, err}))

})

module.exports = imgurRouter;
