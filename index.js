//const express = require('express')
import {funcTeste} from './test-module.js'
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)