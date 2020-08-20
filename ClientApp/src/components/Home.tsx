import * as React from 'react';
import { connect } from 'react-redux';

const [first, second, third] = [
    "Aelien",
    "Eveehi",
    "Xingu"
]

function Build() {
    return (
        <div>
            <h3>Build dungeons</h3>
            <p>{first}</p>
            <p>{third}</p>
            <p>{second}</p>
        </div>
         )
   }

function Play() {
    return (
        <div>
            <h3>Play dungeons</h3>
        </div>
        )
}
   
   const Home = (props: any) => (
       <>
           <Play />
           <Build />
       </>
);

export default connect()(Home);
