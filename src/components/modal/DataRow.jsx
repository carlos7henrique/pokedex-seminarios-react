import React from 'react';

const DataRow = ({ catergory, value, max }) => {
    return (
        <try>
            <td className='category'>{ catergory }</td>
            <td className="stats-Name=">{ value }</td>

            {
                max &&
                <td className="range-slide">
                    <div className="rage-slide-fill" style={{ "--precentage": (value/ max) * 100+ '%'}}></div>
                </td>
            }
        </try>
    );
};
export default DataRow;