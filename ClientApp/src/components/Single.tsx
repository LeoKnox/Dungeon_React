import React from 'react';
import { connect } from 'react-redux';

const Single = () => (
    <div>
        <h1>Single Room</h1>
        <p>Page for displaying single room.</p>
    </div>
    );

export default connect()(Single);