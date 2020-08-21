import * as React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Build() {
    const [checked, setChecked] = useState(true);
    useEffect(() => { // not part of return or render can be used for alerts, console.logs, bebugging etc.
        alert(`value of checked: ${checked.toString()}`);
    });
    return (
        <>
            <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
            {checked ? "checked" : "not checked"}
        </>
        )
   }

   const Home = () => (
       <Build />
);

export default connect()(Home);
