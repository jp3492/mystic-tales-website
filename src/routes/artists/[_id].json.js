import artists from './_artists.js';

const lookup = new Map();

artists.forEach(artist => {
  lookup.set(artist._id, JSON.stringify(artist));
});

export function get(req, res) {
  const { _id } = req.params;

  if (lookup.has(_id)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(lookup.get(_id));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
