import * as React from 'react';
import { connect } from 'react-redux';

   const Home = () => (
       <div>
           <h1>Home Screen</h1>
           <p>Start to build rooms and levels here.</p>
       </div>
);

export default connect()(Home);
