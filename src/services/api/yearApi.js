// WIP
const getYearApi = () => {
  return fetch('https://api.jikan.moe/v4/anime?order_by=title&page=15')
    .then((response) => response.json())
    .then((data) => {
      const dataYear = data.data.map((pepino) => ({ ano: pepino.year }));
      return dataYear;
      //   const pepinoYear = data.data;
      //   console.log(pepinoYear);
    });
};

export default getYearApi;
