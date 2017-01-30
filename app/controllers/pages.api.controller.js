'use strict';
exports.index = function(req, res) {
	res.render('index');
};

exports.application = function(req, res) {
	res.render('application');
};

exports.login = function(req, res) {
	res.render('login');
};

exports.error401 = function(req, res) {
	res.render('401');
};

exports.error403 = function(req, res){
	res.render('403');
}

exports.error404 = function(req, res) {
	res.render('404');
};

