import * as React from 'react';
import { connect } from 'react-redux';

function Build() {
    return (
        <div>
            <h3>Build dungeons</h3>
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
