import React from 'react';
import { connect } from 'react-redux';

const allRooms = [
    {
        name: "Entry",
        floor: "Wood",
        wall: "Stone",
        width: 5,
        height: 5
    }
]

const AllRooms = () => ( // original code props instead of  ()
    <div>
        <h1>All Rooms</h1>
        {renderRooms()}
    </div>
);

function renderRooms() {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Floor</th>
                    <th>Wall</th>
                    <th>Width</th>
                    <th>Height</th>
                </tr>
            </thead>
            <tbody>
                {allRooms.map(room =>
                    <tr key={room.name}>
                        <td>{room.name}</td>
                        <td>{room.floor}</td>
                        <td>{room.wall}</td>
                        <td>{room.width}</td>
                        <td>{room.height}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default connect()(AllRooms);
