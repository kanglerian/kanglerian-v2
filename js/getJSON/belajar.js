function showAllList() {
    $.getJSON('data/learn.json', function(data) {
        let belajar = data.belajar;
        $.each(belajar, function(i, data) {
            $('#list-learn').append('<div class="col-xl-4 col-md-4 col-sm-6 col-12 mb-3"><div class="card"><div class="card-body"><h4 class="card-title">' + data.nama + '</h4><p class="card-text">' + data.deskripsi + '</p><a href="dashboard.html" class="btn btn-utama">lihat selengkapnya</a></div></div></div>');
        });
    });
}

showAllList();

function showDashboard() {
    $.getJSON('data/learn.json', function(data) {
        let belajar = data.belajar;
        $.each(belajar, function(i, data) {
            $('#video').append('<div class="col-12"><div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/' + data.konten + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>');
        });
    });
}

// showDashboard();

$('.link').on('click', function() {
    // $('.link').removeClass('active');
    // $(this).addClass('active');

    let kategori = $(this).html();
    $('h2').html(kategori);
    let judul = $(this).html();
    $('h2').html(judul);

    if (kategori == 'Semua Kelas') {
        showAllList();
        return;
    }

    $.getJSON('data/learn.json', function(data) {
        let belajar = data.belajar;
        let daftar = '';
        let video = '';

        $.each(belajar, function(i, data) {
            if (data.kategori == kategori) {
                daftar += '<div class="col-xl-4 col-md-4 col-sm-6 col-12 mb-3"><div class="card"><div class="card-body"><h4 class="card-title">' + data.nama + '</h4><p class="card-text">' + data.deskripsi + '</p><a href="dashboard.html" class="btn btn-utama">lihat selengkapnya</a></div></div></div>';
            }
        });

        $('#list-learn').html(daftar);

        $.each(belajar, function(i, data) {
            if (data.nama == judul) {
                video += '<div class="col-12"><div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/' + data.konten + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>';
            }
        });

        $('#video').html(video);
    });

});