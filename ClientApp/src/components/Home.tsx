import * as React from 'react';
import { connect } from 'react-redux';

function Sword(props: any) {
    return (
        <h3>{props.sword}</h3>
            )
}

const Home = (props: any) => (
  <div>
    <h1>Welcome to dungeon builder</h1>
        <p>Star building and making dungeons here.</p>
        <Sword sword="Strombringer" />
        <Sword sword="Excalibur" />
  </div>
);

export default connect()(Home);
