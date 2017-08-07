"use strict"

const express = require('express')
const app = express()

app.get('/',(req,res) => {
	res.send('You found me')
})

app.listen(3030, () => {
	console.log('listening on port 3030')
})