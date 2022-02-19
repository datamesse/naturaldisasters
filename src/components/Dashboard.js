import React from 'react'
import vegaEmbed from "vega-embed";
import { vbar, vcolumn, vmap } from '../data/visuals'
import { background } from '../data/assets'

export default function Dashboard() {
    return (
        <>

            <div class='section-top'> 
            </div>
          
            <div class='section-bottom'>
                <div class='dashboard-title'>GLOBAL NATURAL DISASTERS</div>
                <div class='external-link'>@data_messe</div>
                <div class='external-link'>datamesse</div>
                <div class='external-link'>Icons:  https://icons8.com/</div>
            </div>

        </>
    )
}
vegaEmbed('#vis1', vbar, {"actions": false});
vegaEmbed('#vis2', vcolumn, {"actions": false});
vegaEmbed('#vis3', vmap, {"actions": false});

/* {"actions": false} hides the built in Vega ellipsis tool */

/*
      <div id='vis1'></div>
                <div id='vis2'></div>
                <div id='vis3'></div>
                */