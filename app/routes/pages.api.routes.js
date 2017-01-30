
module.exports = function(app) {
	var pages = require('../controllers/pages.api.controller');

    app.get("/", pages.index);
}
