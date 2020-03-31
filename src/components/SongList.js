import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongFrom from './NewSongForm'

const SongList = () => {
    let initialStateArray = [
        { title: 'song uno', id: uuid()},
        { title: 'song dosno', id: uuid()},
        { title: 'song tres uno', id: uuid()},
    ]
    // TODO - inline initialState in a minute
    // use State returns 2 values
    //  1: data, the set of values, so the list of songs
    //  2: function used to edit the state
    // Use array destructuring to pull those 2 out, and name them
    //  songs: the data stored
    //  setSongs: function to change the stored data
    const [ songs, setSongs] = useState(initialStateArray)
    
    // Callback runs every time the component renders or re-renders
    // Could use it to connect to a db or make an api call
    // let useEffectCallback = () => {
    //     console.log("useEffect hook ran", )
    // }
    // useEffect(useEffectCallback)

    const addSong = (title) => {
        // use the setSongs function to update the state referenced by song variable
        const id = uuid();
        setSongs([...songs, { title: title, id: id }]) // could do { title, id} es6 shorthand
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongFrom addSong={addSong} />
        </div>
    );
}

export default SongList