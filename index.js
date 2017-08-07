"use strict"

const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.sendFile(__dirname + '/views/index.html')
})

app.listen(3030, () => {
	console.log('listening on port 3030')
})