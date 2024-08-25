const superagent = require('superagent');

superagent
    .post('http://localhost:3000/abc/file/pass-validation')
    .field('body[hoge]', 'rrew')
    .field('body[fuga]', 'fsfa')
    .attach('file', '/Users/rchaser53/Desktop/test-nest-js/project-name/index.js')
    .set('connection', 'keep-alive')
    .set('user-agent', 'axios/1.7.4')
    .set('host', 'localhost:3000')
    .set('accept', 'application/json, text/plain, */*')
    .set('accept-encoding',  'gzip, compress, deflate, br')
    // .set
    .end((err, res) => {
        console.log(err, res.body);
    });