import { FETCH_STATS } from "../actions/types";

const colors = {
    red: {
        palette: "red",
        paletteLight: "#ffcdd2 red lighten-4",
    },
    orange: {
        palette: "orange",
        paletteLight: "#ffe0b2 orange lighten-4",
    },
    purple: {
        palette: "purple",
        paletteLight: "#e1bee7 purple lighten-4",
    },
    blue: {
        palette: "blue",
        paletteLight: "#bbdefb blue lighten-4",
    },
    green: {
        palette: "green",
        paletteLight: "#c8e6c9 green lighten-4",
    },
};

var keys = Object.keys(colors);

const initialState = {
    styles: {
        color: colors[keys[keys.length * Math.random() << 0]]
    },
    playerStats: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_STATS: 
            return {
                ...state,
                playerStats: action.payload
            };
        default: 
            return state;
    }
};
