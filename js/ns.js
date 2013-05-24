$(document).ready(function() {
	$("#run").click(function(){
		$("#display li").remove();
		var number = $("#number").val();
		for (var i = 1; i <= number; i++) {
			$("#display").append("<li>" + i + "</li>");
		}
	});
});