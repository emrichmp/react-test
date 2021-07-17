import React from 'react';
import LineGraph from 'react-line-graph';


function Linegraph(props) {

    const specs = {
        data,
        smoothing: 0.3,
        accent: 'palevioletred',
        fillBelow: 'rgba(200,67,23,0.1)',
        hover: true,
        gridX: true,
        gridY: true,
        //onHover:(x,y) => {hoverHandler(x,y)}
    };

        return(
            <div>
                <LineGraph {...specs}/>
            </div>
        )
    }

export default Linegraph;