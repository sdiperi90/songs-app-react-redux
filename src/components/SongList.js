import React, { Component } from "react";
import { connect } from "react-redux";
// import { selectSong } from "../actions";

class SongList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>SongList</h1>
            </div>
        );
    }
}

// state.songs will show as a props (this.props) in SongList Component

const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
