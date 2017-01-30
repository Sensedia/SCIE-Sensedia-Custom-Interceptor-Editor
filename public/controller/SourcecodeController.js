angular.module('SENSEIDEJS').controller('SourcecodeController', function($scope, $location, $websocket, $cookieStore) {

	$scope.load = function (){

		var url = "http://" + $location.host() + ":4555";
		if( $cookieStore.get("id") == null ){
			$cookieStore.put("id", guid());
		}

		var debuggerOperation = "debugger_" + $cookieStore.get("id");
		$scope.debugging = false;
		$scope.call = {};

		var socket = io(url, {transports: ['websocket', 'polling', 'flashsocket']});
		socket.on(debuggerOperation, function (data) {
			if($scope.debugging){
				$scope.call = JSON.parse(data);
				$scope.$apply();
			}
		});

		var editor = ace.edit("editor");
		editor.setTheme("ace/theme/monokai");
		editor.getSession().setTabSize(2);
		editor.getSession().setUseSoftTabs(true);
		editor.setShowPrintMargin(false);
		editor.setFontSize(window.innerHeight/30 < 20? 20 : window.innerHeight/35 );
		editor.getSession().setUseWrapMode(true);
		editor.setOptions({
			 mode: "ace/mode/javascript",
			 enableSnippets: true,
			 enableLiveAutocompletion: true,
			 enableBasicAutocompletion: true,
			 maxLines: 20,
			 highlightActiveLine: false

		 });
		 editor.on("change", function(event) {
			 if(event.action=="insert"){
				 line = editor.session.getLine(event.end.row);
				 if(line.indexOf("$call") != line.lastIndexOf("$call")){
					 line = line.replace("$call.", "");
					 editor.session.replace({
					    start: {row: 1, column: 0},
					    end: {row: 1, column: Number.MAX_VALUE}
					}, line)
				 }
			 }
		 });
	}


	function guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		return s4() + s4() + s4() +  s4()  +
			s4() + s4() + s4() + s4();
	}
});
