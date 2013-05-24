$(document).ready(function() {
	$("#run").click(function(){
		$("#display li").remove();
		var alpha = $("#alpha").val();
		for (var i = "a".charCodeAt(0); i <= alpha.charCodeAt(0); i++) {
			$("#display").append("<li>" + String.fromCharCode(i) + "</li>");
		}
	});
});