const axios = require("axios");
// API ROUTE
const XBL_ROUTE = "https://api.fortnitetracker.com/v1/profile/xbl/";
const PSN_ROUTE = "https://api.fortnitetracker.com/v1/profile/psn/";
const PC_ROUTE = "https://api.fortnitetracker.com/v1/profile/pc/";

const HEADERS = {
    headers: {
        'TRN-Api-Key': process.env.FORTNITE_TRACKER_API_KEY
    }
};

const API = {

    fortnitePcApi: name => axios.get(`${PC_ROUTE}/${name}`, HEADERS),

    fortnitePsnApi: name => axios.get(`${PSN_ROUTE}/${name}`, HEADERS),

    fortniteXblApi: name => axios.get(`${XBL_ROUTE}/${name}`, HEADERS)
    
};

module.exports = API;

