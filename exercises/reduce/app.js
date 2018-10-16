const data = [
    { name: "S1E3", season: 1, episode: 3, show: "buffy" },

    { name: "S3E3", season: 3, episode: 3, show: "angel" },
    { name: "S1E2", season: 1, episode: 2, show: "buffy" },
    { name: "S1E1", season: 1, episode: 1, show: "angel" },
    { name: "S1E2", season: 1, episode: 2, show: "angel" },
    { name: "S2E2", season: 2, episode: 2, show: "angel" },

    { name: "S3E2", season: 3, episode: 2, show: "buffy" },
    { name: "S2E1", season: 2, episode: 1, show: "buffy" },
    { name: "S1E3", season: 1, episode: 3, show: "angel" },
    { name: "S3E1", season: 3, episode: 1, show: "angel" },
    { name: "S2E3", season: 2, episode: 3, show: "buffy" },
    { name: "S2E2", season: 2, episode: 2, show: "buffy" },

    { name: "S2E1", season: 2, episode: 1, show: "angel" },
    { name: "S2E3", season: 2, episode: 3, show: "angel" },

    { name: "S3E1", season: 3, episode: 1, show: "buffy" },
    { name: "S1E1", season: 1, episode: 1, show: "buffy" },
    { name: "S3E3", season: 3, episode: 3, show: "buffy" },

    { name: "S3E2", season: 3, episode: 2, show: "angel" },
]

function filterShow(show) {
    return episodes => episodes.filter(ep => ep.show === show)
}

const currentShow = "buffy";

const filteredEpisodes = filterShow(currentShow)(data);

const bySeason = seasonify(filteredEpisodes);

// bySeason.map(season => (
//     <select onChange={({ target: { value } }) => {
//         history.push(`/${currentShow}/seasons/:${value}`)
//     }}>
//         {season.map(ep => (
//             <option value={ep.number}>{ep.name}</option>
//         ))}
//     </select>
// ))

function seasonify(data) {
    return data.reduce((seasons, ep) => {
        //check what season ep belongs to
        if (seasons[ep.season - 1]) {
            seasons[ep.season - 1][ep.episode - 1] = ep;
        } else {
            seasons[ep.season - 1] = []
            seasons[ep.season - 1][ep.episode - 1] = ep;
        }
        return seasons;
        //add it to the correct index
    }, [])
}

