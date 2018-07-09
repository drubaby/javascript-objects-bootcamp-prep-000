var playlist = { Nirvana: 'Nevermind' };

function updatePlaylist(playlist, { [artist]: song } ){
  return Object.assign(playlist, { [artist]: song })
}