import * as React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Build() {
    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");

    useEffect(() => {
        console.log(`field1: ${val}`)
    }, [val])
    useEffect(() => {
        console.log(`field2: ${val2}`)
    }, [val2])
    return (
        <>
            <label>
                Catch Phrase:
                <input value={val} onChange={e => setVal(e.target.value)} />
            </label>
            <label>
                Kill Phrase:
                <input value={val2} onChange={e => setVal2(e.target.value)} />
            </label>
        </>
        )
   }

   const Home = () => (
       <Build />
);

export default connect()(Home);
