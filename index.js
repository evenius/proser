const { startServer } = require('./server/server')
const PORT = process.env.port || 2233

// Just start it up
// console.log(startServer)
startServer(PORT)
