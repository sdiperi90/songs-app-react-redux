import { combineReducers } from "redux";

export const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:05" },
        { title: "Macareba", duration: "2:30" },
        { title: "All Star", duration: "3:15" },
        { title: "I Want it That Way", duration: "1:45" }
    ];
};

// defaulted to null
export const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

// keys in the object inside combinedReducers, are the keys that show up inside of our state object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
