import React from 'react'
import vegaEmbed from "vega-embed"
import { vbar, vcolumn, vmap } from '../data/visuals'
import { githubURL, twitterURL, icons8URL, logo_github, logo_icons8, logo_twitter } from '../data/data'

export default function Dashboard() {
    return (
        <>

            <div class='section-top'>
            </div>
          
            <div class='section-bottom'>
                <div class='dashboard-title'>GLOBAL NATURAL DISASTERS</div>
                <div class='external-link'>
                    <a href={ twitterURL } target='_blank'>
                        <span>
                            <img src={ logo_twitter } />
                        </span>
                        <span>
                            @data_messe
                        </span>
                    </a>
                </div>
                <div class='external-link'>
                    <a href={ githubURL } target='_blank'>
                        <span>
                            <img src={ logo_github } />
                        </span>
                        <span>
                            datamesse
                        </span>
                    </a>
                </div>
                <div class='external-link'>
                    <a href={ icons8URL } target='_blank'>
                        <span>
                            <img src={ logo_icons8 } />
                        </span>
                        <span>
                            Icons:  https://icons8.com/
                        </span>
                    </a>
                </div>
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