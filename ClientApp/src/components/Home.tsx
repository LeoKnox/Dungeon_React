import * as React from 'react';
import { connect } from 'react-redux';

const warriorList = [
    "Aelien",
    "Eveehi",
    "Xingu"
];

function Players(props: any) {
    return (
        <ul>
        {
            props.warriors.map((name: React.ReactNode) => (
                <li>{name}</li>
            ))}
        </ul>   
         );
   }
   
   const Home = (props: any) => (
  <div>
    <h1>Welcome to dungeon builder</h1>
        <p>Star building and making dungeons here.</p>
        <Players warriors={warriorList} />
  </div>
);

export default connect()(Home);
