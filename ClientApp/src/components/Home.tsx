import * as React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

function Build() {
    const [character, setCharacter] = useState("Eveehi");
    const [status, setStatus] = useState("Open");
    const [level, setLevel] = useState(1);
    return (
        <>
        <div>
            <h3>Character playing {character}</h3>
                <button onClick={() => setCharacter("Aelien")}>New Character</button>
        </div>
            <div>
                <p>Character Level {level}</p>
                <button onClick={() => setLevel(level+1)}>New Level</button>
            </div>
        <div>
            <h3>Build: {status} </h3>
            <button onClick={() => setStatus("Closed")}>Close</button>
            <button onClick={() => setStatus("Open")}>Open</button>
        </div>
        </>
         )
   }

   const Home = (props: any) => (
       <Build />
);

export default connect()(Home);
