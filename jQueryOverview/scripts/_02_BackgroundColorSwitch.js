$form = $('<form>')
    .append('<label for="class">Class: </label><input type="text" id="class" value="bird" />')
    .append('<label for ="color">Color: </label><input type="color" id="color" />')
    .append('<input type="button" value="Paint" id="paintButton" />')
    .prependTo('body');

$(document).ready(function () {
    $("#paintButton").click(function () {
        var classValue = $("#class").val();
        var color = $("#color").val();
        var classString = "." + classValue;
        $(classString).css("background", color);
    });
});

