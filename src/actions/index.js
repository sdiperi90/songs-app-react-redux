// we are passing song as an argument that we are trying to select
// named export
export const selectSong = song => {
    return {
        // must have type, but we don't have to have payload
        type: "SONG_SELECTED",
        payload: song
    };
};
