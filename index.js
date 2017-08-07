"use strict"

const express = require('express')
const app = express()

const multer = require('multer')
let storage = multer.memoryStorage()
const upload = multer({storage: storage})

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/views/index.html')
})

app.post('/upload', upload.single('uploadFile'), (req, res) => {
	if (res.file) {
		res.json({size: req.file.size})
	} else {
		res.json({error: 'File not found'})
	}
})

app.listen(3030, () => {
	console.log('listening on port 3030')
})