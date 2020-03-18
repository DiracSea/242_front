// var row = document.getElementById('#tbl').insertRow();
var res1;
var res2;
var res3;
var res; 
$.get("file/rankingResultTweet.txt", function(data) {
    res1 = data.split('\n');
});
$.get("file/rankingResultUser.txt", function(data) {
    res2 = data.split('\n');
});
$.get("file/rankResultSimilarity.txt", function(data) {
    res3 = data.split('\n');
});

$(document).ready(function(){
	
	$("#btn").click(function(){
        var r = $("#rank").val();
        var s = $("#acts").val();
        var k = 3; 
        $("#tbl tr").remove(); 

        // var str = document.app.search(r,s,k);


        // var res = str.split(",")
        var row1 = $("<tr>");
        var row2 = $("<tr>");
        var row3 = $("<tr>");

        if (r == "Rank By Tweet" && s == "food") res = res1; 
        else if (r == "Rank By User" && s == "entertainment") res = res2; 
        else if (r == "Rank By Similarity" && s == "art") res = res3; 
        else alert("Input Out of Sample"); 

        row1.append($("<td>"+r+"</td>"))
           .append($("<td>"+res[0].split(",")[0]+"</td>"))
           .append($("<td>"+res[0].split(",")[1]+"</td>"));
        row2.append($("<td>"+r+"</td>"))
           .append($("<td>"+res[1].split(",")[0]+"</td>"))
           .append($("<td>"+res[1].split(",")[1]+"</td>"));
        row3.append($("<td>"+r+"</td>"))
           .append($("<td>"+res[2].split(",")[0]+"</td>"))
           .append($("<td>"+res[2].split(",")[1]+"</td>"));
       
        $("#tbl tbody").append(row1);
        $("#tbl tbody").append(row2);
        if (r != "Rank By Similarity")
        $("#tbl tbody").append(row3);
		alert("finish");
    });
    $("#cc").click(function(){
        alert("https://github.com/DiracSea/242_front");
    });
});

