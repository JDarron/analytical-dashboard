import { FETCH_STATS } from "./types";
import fortniteApi from "../helpers/api/fortnite.api";

export const fetchStats = playerName => dispatch => {
    fortniteApi.get(playerName)
        .then(stats => {
            dispatch({
                type: FETCH_STATS,
                payload: stats.data
            })
        }).catch(err => console.error(err));
};
