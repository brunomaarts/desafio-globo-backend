module.exports = {
  "type": "mongodb",
  "url": process.env.TYPEORM_URL,
  "synchronize": true,
  "logging": false,
  "useUnifiedTopology": true,
  "entities": [
    "dist/entities/*.js"
  ]
}
