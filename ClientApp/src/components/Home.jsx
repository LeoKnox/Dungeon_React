import * as React from 'react';
import { connect } from 'react-redux';
import { useReducer } from 'react';

function Build() {
    const [checked, toggle] = useReducer(checked => !checked, false)

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
