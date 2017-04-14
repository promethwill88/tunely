// controllers/albumsController.js
// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
};

// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
};

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
};

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
};

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
};


var Albums = [];
Albums.push({
			_id: 132,
             artistName: 'Elton John',
             name: 'Goodbye Yellow Brick Road',
             releaseDate: '1979, Feburary 9',
             genres: [ 'Rock', 'Pop' ]
           });
Albums.push({
			_id: 133,
             artistName: 'The Beatles',
             name: 'Rubber Soul',
             releaseDate: '1965, December 3',
             genres: [ 'Rock', 'Pop' ]
           });
Albums.push({
			_id: 134,
             artistName: 'The Beatles',
             name: 'The Beatles - The White Album',
             releaseDate: '1968, November 22',
             genres: [ 'Rock', 'Pop' ]
           });
Albums.push({
			_id: 135,
             artistName: 'Led Zeppelin',
             name: 'Led Zeppelin II',
             releaseDate: '1969, October 22',
             genres: [ 'Hard Rock' ]
           });

module.exports = {
    index: index,
    create: create,
    show: show,
    destroy: destroy,
    update: update
};