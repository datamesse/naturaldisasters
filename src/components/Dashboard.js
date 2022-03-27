import React from 'react'
import vegaEmbed from "vega-embed"
import { vbar, vcolumn, vmap, vline, vtimeline    ,vscatterplot } from '../data/visuals'
import { githubURL, twitterURL, icons8URL, logo_github, logo_icons8, logo_twitter, logo_github_hover, logo_icons8_hover, logo_twitter_hover } from '../data/data'

export default function Dashboard() {
    return (
        <>
            <div class='section-top'>
                <div class='section-top-left'>
                    <div class='section-top-left-top'>

                        <div id='vis4'></div>

                    </div>
                    <div class='section-top-left-bottom'>

                        <div id='vis2'></div>

                    </div>
                </div>
                <div class='section-top-right'>
                    section-top-right
                    <div id='vis1'></div>
                    <div id='vis3'></div>
                </div>
            </div>
          
            <div class='section-bottom'>
                <div class='dashboard-title'>GLOBAL NATURAL DISASTERS</div>
                <div class='external-links'>
                    <div class='external-link'>
                        <a href={ twitterURL } target='_blank'>
                            <span>
                                <img src={ logo_twitter } />
                                <img src={ logo_twitter_hover } />
                            </span>
                            <span class='external-link-text'>
                                @data_messe
                            </span>
                        </a>
                    </div>
                    <div class='external-link'>
                        <a href={ githubURL } target='_blank'>
                            <span>
                                <img src={ logo_github } />
                                <img src={ logo_github_hover } />
                            </span>
                            <span class='external-link-text'>
                                datamesse
                            </span>
                        </a>
                    </div>
                    <div class='external-link'>
                        <a href={ icons8URL } target='_blank'>
                            <span>
                                <img src={ logo_icons8 } />
                                <img src={ logo_icons8_hover } />
                            </span>
                            <span class='external-link-text'>
                                Icons:  https://icons8.com/
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
vegaEmbed('#vis1', vbar, {"actions": false});


vegaEmbed('#vis2', vmap, {"actions": false});


vegaEmbed('#vis3', vcolumn, {"actions": false});
vegaEmbed('#vis4', vline, {"actions": false});
vegaEmbed('#vis5', vtimeline, {"actions": false});


/* {"actions": false} hides the built in Vega ellipsis tool */

/*
      <div id='vis1'></div>
                <div id='vis2'></div>
                <div id='vis3'></div>
                */