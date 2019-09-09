import React from "react";
//curly braces used to import selectSong means that we want to import named export from this file
// *** we don't need curly braces for export default
import { selectSong } from "../actions";
import SongList from "./SongList";

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <SongList></SongList>
        </div>
    );
};

export default App;
