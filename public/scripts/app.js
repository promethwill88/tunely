/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Elton John',
             name: 'Goodbye Yellow Brick Road',
             releaseDate: '1979, Feburary 9',
             genres: [ 'Rock', 'Pop' ]
           });
sampleAlbums.push({
             artistName: 'The Beatles',
             name: 'Rubber Soul',
             releaseDate: '1965, December 3',
             genres: [ 'Rock', 'Pop' ]
           });
sampleAlbums.push({
             artistName: 'The Beatles',
             name: 'The Beatles - The White Album',
             releaseDate: '1968, November 22',
             genres: [ 'Rock', 'Pop' ]
           });
sampleAlbums.push({
             artistName: 'Led Zeppelin',
             name: 'Led Zeppelin II',
             releaseDate: '1969, October 22',
             genres: [ 'Hard Rock' ]
           });
/* end of hard-coded data */
console.log(sampleAlbums);
console.log(sampleAlbums[0].artistName);

// $('.album-name').append(sampleAlbums[0].artistName);


$(document).ready(function() {
  console.log('app.js loaded!');
$('.list-group').append('<li class="list-group-item"><h4 class="inline-header">Album Name:</h4><span class="album-name">' + sampleAlbums[0].artistName + '</span></li>');
});





// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);

}
