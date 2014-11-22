$(document).ready(function () {
    $('#MakeTableButton').click(function () {
        var jsonStr = $('#area').val();
        if (jsonStr) {
            $('.forHide').hide();
            $('<div>').attr('id', 'tableDiv');
            var jsonObj = jQuery.parseJSON(jsonStr);
            var table = $('<table></table>')
                .addClass('table');
            var tableBody = $('<tbody></tbody>');
            var tableHead = $('<thead></thead>');

            // makes a heading row of the table
            var objKeys = Object.keys(jsonObj[0]);
            var headingRow = $('<tr></tr>');
            
            for (var i = 0; i < objKeys.length; i++) {
                var headingCell = $('<th></th>')
                .addClass('olive')
                .text(objKeys[i].charAt(0).toUpperCase() + objKeys[i].slice(1)); // Gets keys and capitalize their first letters.
                
                headingRow.append(headingCell);
            }

            headingRow.appendTo(tableHead );

            // printing data
            jsonObj.forEach(function (car) {
                var row = $('<tr></tr>');

                for (var index in car) {
                    row.append($('<td></td>').text(car[index]));
                }

                row.prependTo(tableBody);
            });

            tableHead.appendTo(table);
            tableBody.appendTo(table);
            table.appendTo(document.body);
        } else {
            alert("Area field can not be empty!");
        }
    });
});