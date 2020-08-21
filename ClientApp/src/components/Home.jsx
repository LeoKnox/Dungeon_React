import * as React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Build() {
    const [checked, setChecked] = useState(false)
    function toggle() {
        setChecked(checked => !checked);
    }

    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked ? " checked" : " not checked" }
        </>
        )
   }

   const Home = () => (
       <Build />
);

export default connect()(Home);
