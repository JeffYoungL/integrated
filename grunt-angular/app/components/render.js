var views = require('co-views');

module.exports = views(__dirname + '/../www/templates', {
    map: {html: 'swig'}
});
