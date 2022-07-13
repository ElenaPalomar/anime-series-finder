// WIP
const getYearApi = () => {
  return fetch("https://api.jikan.moe/v4/anime?order_by=title&page=15")
    .then((response) => response.json())
    .then((data) => {
      const dataYear = data.data.map((pepino) => ({ ano: pepino.year }));
      return dataYear;
      //   const pepinoYear = data.data;
      //   console.log(pepinoYear);
    });
};

export default getYearApi;

// Code from App
/* const [dataYears, setDataYears] = useState([]);

useEffect(() => {
  getYearApi().then((dataYears) => {
    console.log(dataYears);
    setDataYears(dataYears);
  });
}, []);

console.log(dataYears);

const yearFilter = dataYears.filter((user) => {
  return user.ano === 2012;
});
console.log(yearFilter); */
