import * as React from 'react';
import { connect } from 'react-redux';

const warriorList = [
    { id: 1, name: "Aelien", class: "Fighter" },
    { id: 2, name: "Eveehi", class: "Wizard" },
    { id: 3, name: "Xingu", class: "Thief" }
];

function Players() {
    return (
        <div>
            {warriorList.map((warrior, i) =>
                <div key={warrior.id}>
                    <h2>{i}:{warrior.name}</h2>
                    <p>Class: {warrior.class}</p>
                </div>
            )}
            </div>
         );
   }
   
   const Home = (props: any) => (
  <div>
    <h1>Welcome to dungeon builder</h1>
        <p>Star building and making dungeons here.</p>
           {Players()}
    </div>
);

export default connect()(Home);
