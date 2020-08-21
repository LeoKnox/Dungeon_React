import * as React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function GH(login) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://ap.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    if (data) {
        return <div>{JSON.stringify(data)}</div>;
    }
    return null;
}

function Build() {
    return <GH login="moonhighway" />;
   }

   const Home = () => (
       <Build />
);

export default connect()(Home);
