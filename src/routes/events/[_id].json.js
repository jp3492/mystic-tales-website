import events from './_events.js';

const lookup = new Map();

events.forEach(event => {
	lookup.set(event._id, JSON.stringify(event));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
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
