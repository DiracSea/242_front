// var row = document.getElementById('#tbl').insertRow();


$(document).ready(function(){
	
	$("#btn").click(function(){
        alert($("#rank").val());
        $("#tbl tr").remove(); 
        var row = $("<tr>");

        row.append($("<td>Text-1</td>"))
           .append($("<td>Text-2</td>"))
           .append($("<td>Text-3</td>"));
       
        $("#tbl tbody").append(row);
		
	});
});

