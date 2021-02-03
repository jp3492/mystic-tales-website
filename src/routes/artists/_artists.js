const data = new Array(10).fill("").map((d, i) =>
  ({
    _id: String(i),
    name: `Artist Name ${i}`,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    profileImage: "https://i1.sndcdn.com/artworks-BEkZ9tnGILy0BPIE-E47aOA-t500x500.jpg",
    images: new Array(4).fill("https://i1.sndcdn.com/artworks-BEkZ9tnGILy0BPIE-E47aOA-t500x500.jpg"),
    fbLink: "",
    scLink: "",
    scLinks: new Array(5).fill("https://soundcloud.com/mattmosphere/smooth-sailing-seepferdchen"),
    links: []
  })
);

export default data;