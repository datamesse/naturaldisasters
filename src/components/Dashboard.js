import React from 'react'
import vegaEmbed from "vega-embed";
import { vbar, vcolumn, vmap } from '../data/visuals'

export default function Dashboard() {
    return (

        <>
            <div id='vis1'></div>
            <div id='vis2'></div>
            <div id='vis3'></div>
        </>

    )
}
vegaEmbed('#vis1', vbar, {"actions": false});
vegaEmbed('#vis2', vcolumn, {"actions": false});
vegaEmbed('#vis3', vmap, {"actions": false});

/* {"actions": false} hides the built in Vega ellipsis tool */