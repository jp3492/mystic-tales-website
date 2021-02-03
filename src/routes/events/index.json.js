import events from './_events.js';

const contents = JSON.stringify(events.map(event => event));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}