$.getJSON('data/shalat.json', function(data) {
    $.each(data, function(i, data) {
        $('#list').append('<tr><th scope="row">' + (i + 1) + '</th><td>' + data.tanggal + '</td><td>' + data.shubuh + '</td><td>' + data.terbit + '</td><td>' + data.dhuha + '</td><td>' + data.dzuhur + '</td><td>' + data.ashr + '</td><td>' + data.magrib + '</td><td>' + data.isya + '</td></tr>');
    });
});