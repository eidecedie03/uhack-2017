var http = require('http');
//
var WSRequest = {
  get : (res, url, page) => {
    http.get(url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        res.render(page, {title: 'this is title', data: JSON.parse(data)});
      });

    })
  }
}

module.exports = WSRequest;
