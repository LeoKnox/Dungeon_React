import React from 'react';
import { connect } from 'react-redux';

const Levels = () => (
    <div>
        <h1>Levels</h1>
        <p>Collection of connected rooms</p>
    </div>
    );

export default connect()(Levels);