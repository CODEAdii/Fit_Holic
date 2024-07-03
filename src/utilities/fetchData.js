export const exerciseOptions = {
	method: 'GET',
	headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',

		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY
	}
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '5fb2b96242msha86bcfdfcd11e34p12b454jsnf4eecfb5817d',
    },
  };

export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json(); 

    return data;
};