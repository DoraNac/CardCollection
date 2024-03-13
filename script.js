const collection = [
  {
    name: "Feelin' Myself",
    artist: "Mac Dre",
    releaseYear: 2004,
    picture: "https://i.scdn.co/image/ab67616d0000b2738161984df163cb3b4ea7cb45",
    album: "Ronald Dregan: Dreganomics",
    genre: ["Rap"],
    description:
    "'Feelin' Myself' is a swaggering anthem by Mac Dre, boasting infectious energy, clever wordplay, and a hypnotic beat that captures the essence of self-confidence and charisma.",
    YTLink: "https://www.youtube.com/watch?v=6vE6oUc0t4o",
  },
  {
    name: "Situation Critical",
    artist: "Andre  Nickatina",
    releaseYear: 1995,
    picture: "https://m.media-amazon.com/images/I/517p8MlgMOL._UXNaN_FMjpg_QL85_.jpg",
    album: "I Hate You with a Passion",
    genre: ["Rap"],
    description:
      "A gritty narrative-driven track, characterized by its raw lyrics, intense delivery, and dark production, painting a vivid picture of street life and its challenges.",
    YTLink: "https://www.youtube.com/watch?v=S_H-H7qaK4Y&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&index=42",
  },
  {
    name: "Game Recognize Game ",
    artist: "JT the Bigga Figga ft. Mac Mall",
    releaseYear: 1993,
    picture: "https://upload.wikimedia.org/wikipedia/en/b/b2/Playaz_N_the_Game.jpg",
    album: "Playaz N the Game",
    genre: ["Rap"],
    description:
      "Game Recognize Game is a classic collaboration featuring JT the Bigga Figga and Mac Mall, showcasing slick rhymes, smooth flows, and a laid-back West Coast vibe, offering insights into the game of life and street hustling.",
    YTLink: "https://www.youtube.com/watch?v=rRWAY9-CvpU",
  },
  {
    name: "I'm A Pisces",
    artist: "Andre Nickatina",
    releaseYear: 1997,
    picture: "https://i1.sndcdn.com/artworks-000104810057-56644i-t500x500.jpg",
    album: "Cocaine Raps",
    genre: ["Rap"],
    description:
      "Exudes a mellow yet hypnotic aura with Andre Nickatina's introspective verses, exploring themes of self-awareness and the duality of human nature, set against a backdrop of dreamy production.",
    YTLink: "https://www.youtube.com/watch?v=_peLn5T8oDw&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&index=11",
  },
  {
    name: "Classified",
    artist: "Andre Nickatina",
    releaseYear: 1999,
    picture: "https://i1.sndcdn.com/artworks-000104874976-b1n8ux-t500x500.jpg",
    album: "Tears of a Clown",
    genre: ["Rap"],
    description:
      "Classified showcases Andre Nickatina's lyrical prowess and storytelling finesse, delivering vivid narratives over a soulful and atmospheric beat, inviting listeners into the artist's world of vivid imagery and introspection.",
    YTLink: "https://www.youtube.com/watch?v=mKXCkcJjrC4&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&index=10",
  },
  {
    name: "Conversation with a Devil",
    artist: "Andre Nickatina",
    releaseYear: 2003,
    picture: "https://m.media-amazon.com/images/I/51DCn7ub5uL._UXNaN_FMjpg_QL85_.jpg",
    album: "Conversation with a Devil",
    genre: ["Rap"],
    description:
      "Conversation with a Devil delves into dark themes with Andre Nickatina's haunting lyrics, exploring moral dilemmas, inner conflicts, and the temptations of life, set against an eerie backdrop of atmospheric production.",
    YTLink: "https://www.youtube.com/watch?v=2MKunhI8X1o",
  },
  {
    name: " Not My Job",
    artist: "Mac Dre",
    releaseYear: 2004,
    picture: "https://i.scdn.co/image/ab67616d0000b273558dd5a7409ef648d4b8c4e9",
    album: "The Genie of the Lamp",
    genre: ["Rap"],
    description: "Not My Job by Mac Dre is a high-energy banger fueled by infectious beats, witty wordplay, and charismatic delivery, serving as a testament to the artist's playful yet unapologetic style and his ability to command attention.",
    YTLink:
      "https://www.youtube.com/watch?v=j8Szl_JyCUQ&list=PLv57bJZFYtlGyR7Je_yp9Ffy1Ip7V_X1G&index=4",
  },
  {
    name: "Bottles Up",
    artist: "The Team",
    releaseYear: 2005,
    picture:
      "https://c.saavncdn.com/625/World-Premiere-English-2005-500x500.jpg",
    album: "World Premiere",
    genre: ["Rap"],
    description:
      "An anthem for celebration and camaraderie, featuring The Team's dynamic flows, catchy hooks, and party-ready production, inviting listeners to raise their glasses and revel in the moment.",
    YTLink:
      "https://www.youtube.com/watch?v=_S0ZhxXh6pk&list=PL1F17767A985E11B4&index=28",
  },
  {
    name: "4am - Bay Bridge Music",
    artist: "Andre Nickatina ft. Equipto",
    releaseYear: 2005,
    picture: "https://i1.sndcdn.com/artworks-000104795019-iw1o43-t500x500.jpg",
    album: "Gun-Mouth 4 Hire: Horns and Halos 2",
    genre: ["Rap"],
    description:
      "Captures the nocturnal essence of the Bay Area, with Andre Nickatina and Equipto delivering reflective verses over a laid-back yet mesmerizing instrumental, evoking the late-night vibes and introspective thoughts.",
    YTLink: "https://www.youtube.com/watch?v=sCL88-3gnmA",
  },
  {
    name: "N.E.W. Oakland",
    artist: "Mistah F.A.B.",
    releaseYear: 2005,
    picture:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Mistah-f.a.b.-son-of-a-pimp-cover.jpg",
    album: "Son Of A Pimp",
    genre: ["Rap"],
    description: "N.E.W. Oakland pays homage to Mistah F.A.B.'s hometown, showcasing his pride for the city and its culture, with verses, infectious energy, and anthemic production that uplifts and represents the resilience of Oakland's community.",
    YTLink:
      "https://www.youtube.com/watch?v=vJbNS9T5WWY",
  },
];

function createMusicCards() {
  const container = document.getElementById("music-container");

  collection.forEach((track) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${track.picture}" alt="${track.name}" class="card-img">
        <div class="card-content">
          <h2 class="card-title">${track.name}</h2>
          <hr>
          <p class="card-artist">Artist: ${track.artist}</p>
          <p class="card-release-year">Release Year: ${track.releaseYear}</p>
          <p class="card-album">Album: ${track.album}</p>
          <p class="card-genre">Genre: ${track.genre.join(", ")}</p>
          <hr>
          <p class="card-description">${track.description}</p>
          <a href="${
            track.YTLink
          }" class="btn" target="_blank">Listen on YouTube</a>
        </div>
      `;

    container.appendChild(card);
  });
}

createMusicCards();
