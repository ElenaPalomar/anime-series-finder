const getTitleApi = (searchFetch) => {
  return fetch(`https://api.jikan.moe/v4/anime?q=${searchFetch}`)
    .then((response) => response.json())
    .then((data) => {
      const animeData = data.data.map((anime) => ({
        id: anime.mal_id,
        poster: anime.images.jpg.image_url,
        trailer: anime.trailer.url,
        titles: {
          title: anime.title,
          titleEnglish: anime.title_english,
          titleJapanese: anime.title_japanese,
        },
        type: anime.type,
        episodes: anime.episodes,
        aired: {
          status: anime.status,
          from: {
            fromDay: anime.aired.prop.from.day,
            fromMonth: anime.aired.prop.from.month,
            fromYear: anime.aired.prop.from.year,
          },
          to: {
            toDay: anime.aired.prop.to.day,
            toMonth: anime.aired.prop.to.month,
            toYear: anime.aired.prop.to.year,
          },
          airingString: anime.aired.string,
        },
        duration: anime.duration,
        rating: anime.rating,
        score: {
          number: anime.score,
          users: anime.score_by,
        },
        synopsis: anime.synopsis,
        season: {
          term: anime.season,
          year: anime.year,
        },
        broadcast: {
          day: anime.broadcast.day,
          time: anime.broadcast.time,
          timezone: anime.broadcast.timezone,
        },
        genres: [...anime.genres, ...anime.themes, ...anime.demographics],
      }));
      return animeData;
    });
};

export default getTitleApi;
