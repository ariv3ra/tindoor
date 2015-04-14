var express = require('express');

var app =express();

require('./router/app')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(3000, function(){
  console.log('Tindoor Server is running on port: 3000');
});