function showDataYoutube() {
    $.get(
        "https://www.googleapis.com/youtube/v3/channels", {
            part: 'snippet,statistics',
            id: 'UC0wRN3aUL9V7AS_TrZxNquw',
            dataType: 'json',
            key: 'AIzaSyComZT4FQVCcthcz76nfzAh7O1wJrEnMw0'
        },
        function(result) {
            let akun = result.items[0].snippet;
            let subrek = result.items[0].statistics.subscriberCount;
            let channel = akun.title;
            let photo = akun.thumbnails.high.url;

            $('#profileYoutube').attr('src', photo);
            $('#channelTitle').append(`<b> ${channel} </b>`);
            $('#subscriber').append(`Jumlah : ${subrek} subscriber`);

        });
}

function showVideoYoutube() {
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet',
            channelId: 'UC0wRN3aUL9V7AS_TrZxNquw',
            dataType: 'json',
            maxResults: '1',
            order: 'date',
            key: 'AIzaSyComZT4FQVCcthcz76nfzAh7O1wJrEnMw0'
        },
        function(video) {
            let videos = video.items[0].id;
            $('#latestVideo').attr('src', 'https://www.youtube.com/embed/' + videos.videoId + '');
        });
}
showDataYoutube();
showVideoYoutube();