import artists from './_artists.js';

const contents = JSON.stringify(artists.map(artist => artist));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
};