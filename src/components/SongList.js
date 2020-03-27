import React, { useState, useEffect } from 'react';


const SongList = () => {
    let initialStateArray = [
        { title: 'song uno', id: 1},
        { title: 'song dosno', id: 2},
        { title: 'song tres uno', id: 3},
    ]
    // TODO - inline initialState in a minute
    // use State returns 2 values
    //  1: data, the set of values, so the list of songs
    //  2: function used to edit the state
    // Use array destructuring to pull those 2 out, and name them
    //  songs: the data stored
    //  setSongs: function to change the stored data
    const [ songs, setSongs] = useState(
        initialStateArray
    )
    
    // Callback runs every time the component renders or re-renders
    // Could use it to connect to a db or make an api call
    let useEffectCallback = () => {
        console.log("useEffect hook ran", )
    }
    useEffect(useEffectCallback)


    return (
        <div classNem="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
        </div>
    );
}

export default SongList