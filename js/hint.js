var availableTags1;

// $(function() {
//     var availableTags = ["California"];
//      $( "#tags" ).autocomplete({
//          source:availableTags
//         })
//  });

$.get("file/act_hint.txt", function(data) {
    availableTags1 = data.split('\n');
     $( "#acts" ).autocomplete({
         source:availableTags1
        })
 });

// $(document).ready(function() {
//     $('#dtBasicExample').DataTable();
// } );