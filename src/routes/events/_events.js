const data = new Array(10).fill("").map((d, i) =>
	({
		_id: String(i),
		name: `Event Name ${i}`,
		image: "https://menschmeier.berlin/media/pages/events/2019-12-21-mystic-creatures/2095204258-1575931654/2019-12-21-mysticcreatures-870x.jpg",
		lineUp: new Array(5).fill("").map((l, i) => ({ name: `Artist Name ${i}`, link: "www.google.de" })),
		link: "www.google.de"
	})
);

export default data;