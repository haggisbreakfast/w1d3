var library = {
  tracks: {
    t01: {
      id: 't01',
      name: 'Code Monkey',
      artist: 'Jonathan Coulton',
      album: 'Thing a Week Three'
    },
    t02: {
      id: 't02',
      name: 'Model View Controller',
      artist: 'James Dempsey',
      album: 'WWDC 2003'
    },
    t03: {
      id: 't03',
      name: 'Four Thirty-Three',
      artist: 'John Cage',
      album: 'Woodstock 1952'
    }
  },
  playlists: {
    p01: {
      id: 'p01',
      name: 'Coding Music',
      tracks: ['t01', 't02']
    },
    p02: {
      id: 'p02',
      name: 'Other Playlist',
      tracks: ['t03']
    }
  },
  printPlayLists: function() {
    for (var a in this.playlists) {
      console.log(a + ': ' + this.playlists[a].name + ' - ' + this.playlists[a].tracks.length + ' tracks');
    }
  }, //closes printplaylists
  printTracks: function() {
    for (var i in this.tracks)
      console.log(i + ': ' + this.tracks[i].name + ' by ' + this.tracks[i].artist + '(' + this.tracks[i].album + ')');
  }, //closes printTracks
  printPlaylist: function(playlistId) {
    console.log(
      playlistId + ': ' + this.playlists[playlistId].name + ' - ' + this.playlists[playlistId].tracks.length + ' tracks'
    );
    for (var i = 0; i < this.playlists[playlistId].tracks.length; i++) {
      var track = this.playlists[playlistId].tracks[i];
      console.log(
        track +
          ': ' +
          this.tracks[track].name +
          ' by ' +
          this.tracks[track].artist +
          '(' +
          this.tracks[track].album +
          ')'
      );
    }
  }, //closes printPlaylist
  addTrackToPlaylist: function(trackId, playlistId) {
    var addTrack = this.playlists[playlistId].tracks.push(trackId);
  }, //closes addTrack
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }, //closes uid
  addTrack: function(name, artist, album) {
    var newaweSomeTrack = {
      id: this.uid(),
      name: name,
      artist: artist,
      album: album
    };
    var adder = (this.tracks[newaweSomeTrack.id] = newaweSomeTrack);
    console.log(this.tracks);
  }, //closes addTrack
  addPlaylist: function(name) {
    var newPlaylist = {
      id: this.uid(),
      name: name,
      tracks: []
    };
    this.playlists[newPlaylist.id] = newPlaylist;
    console.log(this.playlists);
  }
}; // library closes//
library.printPlayLists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01', 'p01');
library.addTrack('My Good Songs', 'Rohit', 'My first Album');
library.addPlaylist('p03');
