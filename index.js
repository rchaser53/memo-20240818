const axios = require('axios');
const fs = require('fs');
;(async () => {

    const form = new FormData();
    form.append('file', 'my value');
    form.append('body', new Blob(['some content']));

    const { data } = await axios.postForm('http://localhost:3000/abc/file/pass-validation', {
            body: {
                hoge: "rrew",
                fuga: "fsfa"
            },
            file: fs.createReadStream('/Users/rchaser53/Desktop/test-nest-js/project-name/index.js')
        }
    );

    console.log(data)
})();
