
module.exports = function(app) {
	var manager = require('../controllers/manager.api.controller');
  app.post("/interceptors/debugger", manager.startDebugger);
}
