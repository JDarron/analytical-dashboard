const fortniteApi = require("../api/fortnite.api");

exports.getPlayerStats = (req, res) => {
    const playerName = req.params.id.split(' ').join('%20');
    fortniteApi.fortnitePcApi(playerName)
        .then(pcData => {
            if (pcData.data.error) return fortniteApi.fortnitePsnApi(playerName);
            else res.json(pcData.data);
        })
        .then(psnData => {
            if (psnData.data.error) return fortniteApi.fortniteXblApi(playerName);
            else res.json(psnData.data);
        })
        .then(xblData => {
            if (xblData.data.error) res.json(xblData.data);
            else res.json(xblData.data);
        })
        .catch(err => res.json(err));
};

