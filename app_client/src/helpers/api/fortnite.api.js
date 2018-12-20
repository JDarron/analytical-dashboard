import axios from "axios";
const PLAYER_ROUTE = "/api/player";

export default {
    /**
     * 
     * @param {String} id 
     */
    get(playerName) {
        return axios.get(`${PLAYER_ROUTE}/${playerName}`);
    }
}; // END EXPORT OF OBJECT