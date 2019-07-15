module.exports = function(app) {
  const cors = require('cors')
  const corsOptions = {
    origin: function(origin. callback) {
      if (process.env.CORS_WHITELIST.split(' ').indexOf(orgin !== -1){
      } else {
        callback(new Error('not allowed by cors configureation'))
      }
    }.
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    }
    app.options('*', cors(corsOptions))
    app.use(cors(corsOptions))
  }
}
