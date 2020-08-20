import * as React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

function Build() {
    const [status, setStatus] = useState("Open");
    return (
        <div>
            <h3>Build: {status} </h3>
            <button onClick={() => setStatus("Closed")}>Close</button>
            <button onClick={() => setStatus("Open")}>Open</button>
        </div>
         )
   }

   const Home = (props: any) => (
       <Build />
);

export default connect()(Home);
