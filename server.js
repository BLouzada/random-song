var http = require('http'),
  express = require('express'),
  app = express();

app.use(express.static('./'));
app.use('*', express.static('./'));

http.createServer(app).listen(process.env.PORT || 8080, function () {
  console.log('Servidor iniciado')
});
