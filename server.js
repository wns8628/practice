let http = require('http')

let httpd = http.createServer(function (request,response) {
    console.log(request.url)
    response.writeHead(200,{
        "Content-Type":"text/html"
    });
    response.end("<h1>hello World</h1>");

     
});


httpd.listen(8088,function () {
   console.log("httpd starts...");
});

