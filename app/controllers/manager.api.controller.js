'use strict';
exports.startDebugger = function(req, res) {
  var socket = req.app.get('socketIo');

  //var call = req.body;
  var call = initMock();
  var debuggerOperation = call.debuggerOperation;
  delete(call.debuggerOperation);

  socket.emit(debuggerOperation, JSON.stringify(call));
  res.end();
};


function initMock(){
  var call = {};


  call.body = {};
  call.body.nome = "Diego";
  call.body.idade = 23;
  call.body.nomea = "Diego";
  call.body.idadea = 23;
  call.body.nomeb = "Diego";
  call.body.idadeb = 23;
  call.body.nomeaa = "Diego";
  call.body.idadeaa = 23;
  call.body.nomeaaa = "Diego";
  call.body.idadeaaa = 23;
  call.body.nomeaaaa = "Diego";
  call.body.idadeaaaa = 23;


  call.header = {};
  call.header.access_token = "123456789";

  call.queryParams = {};
  call.queryParams.status = "ok";

  call.pathParams = {};
  call.pathParams.id = 10;

  call.url = "www.google.com.br";
  call.callerAddress = "172.168.10.10";
  call.accessTokenOwner = "usery";
  call.accessTokenCode = "usery";
  call.receivedTimeMillis = "10 bytes";
  call.debuggerOperation = "debugger_6513a3aadc9e193ce3f04157c006d3ea";

  return call;

}
