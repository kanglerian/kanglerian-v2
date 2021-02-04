function showIronman() {
    $.ajax({
        url: 'http://omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '81655440',
            's': 'Iron Man'
        },
        success: function(result) {
            // console.log(result);
            let movies = result.Search;
            // console.log(movies);
            $.each(movies, function(i, data) {
                $('#list-movie').append(`
                        <div class="col-xl-4 col-md-4 col-sm-6 col-12 mb-3">
                            <div class="card">
                                <img class="card-img-top" src="` + data.Poster + `" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title"><b>` + data.Title + `</b></h5>
                                    <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                                    <a href="#" class="btn btn-utama see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + data.imdbID + `">Lihat detailnya</a>
                                </div>
                            </div>
                        </div>
                    `);
            });

        }
    });
}

showIronman();

function searchMovies() {
    $('#list-movie').html('');

    $.ajax({
        url: 'http://omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '81655440',
            's': $('#search-input').val()
        },
        success: function(result) {
            // console.log(result);
            if (result.Response == "True") {
                let movies = result.Search;
                // console.log(movies);
                $.each(movies, function(i, data) {
                    $('#list-movie').append(`
                        <div class="col-xl-4 col-md-4 col-sm-6 col-12 mb-3">
                            <div class="card">
                                <img class="card-img-top" src="` + data.Poster + `" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">` + data.Title + `</h5>
                                    <p class="card-text">Film ini di buat pada tahun ` + data.Year + ` sehingga bagus sekali, bagus pokoknya!</p>
                                    <a href="#" class="btn btn-utama see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + data.imdbID + `">Lihat detailnya</a>
                                </div>
                            </div>
                        </div>
                    `);
                });

                $('#search-input').val('');

            } else {
                // $('#list-movie').html('<h1>Film tidak ditemukan</h1>');
                $('#list-movie').html('<h1>' + result.Error + '</h1>');
            }
        }
    });

}

$('#search-button').on('click', function() {
    searchMovies();
});

$('#search-input').on('keyup', function(e) {
    if (e.which === 13) {
        searchMovies();
    }

});

$('#list-movie').on('click', '.see-detail', function() {
    // console.log($(this).data('id'));
    $.ajax({
        url: 'http://omdbapi.com/',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey': '81655440',
            'i': $(this).data('id')
        },
        success: function(movie) {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                  <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="` + movie.Poster + `" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>` + movie.Title + `<h3></li>
                                <li class="list-group-item">Released : ` + movie.Released + `</li>
                                <li class="list-group-item">Genre : ` + movie.Genre + `</li>
                                <li class="list-group-item">Director : ` + movie.Director + `</li>
                                <li class="list-group-item">Actors : ` + movie.Actors + `</li>
                            </ul>
                        </div>
                    </div>
                  </div>  
                `);
            }
        }

    });
});