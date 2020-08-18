import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Welcome to dungeon builder</h1>
    <p>Star building and making dungeons here.</p>
  </div>
);

export default connect()(Home);
