let http = require('http');
let users = [
  {
    id: 1, name: 'zhufeng1'
  },
  {
    id: 2, name: 'zhufeng2'
  }
]
let server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users));
  }else {
    res.end('NOT FOUND');
  }
})
server.listen(3000, () => {
  console.log('后端api服务器已启动')
})