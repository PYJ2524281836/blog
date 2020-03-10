//创建一个服务器，配置服务器的相关信息
const http = require('http');
const handleServer = require('../app');
http.createServer(handleServer).listen(8081);