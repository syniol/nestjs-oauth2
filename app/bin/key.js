#!/usr/bin/env node
const crypto = require('node:crypto')

const ecdh = crypto.createECDH('prime192v1')
const clientKey = ecdh.generateKeys()
const clientSecret = ecdh.computeSecret(clientKey)

// Outputs a Key for password encryption in base64 formatted string
console.log(clientSecret.toString('base64'))
