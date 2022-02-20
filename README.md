# How to create data visualisation with Vega Lite on React.js
Based on post by [Ibrahim Ragab](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) and offical [Vega Lite Embed documentation](https://vega.github.io/vega-lite/usage/embed.html).

## Initial set up
Requirement: Install Node.js on your machine, and install React as a local dependency
```
npm install -g create-react-app
```

1. From GitHub, create a new Repository and link it to an empty folder on your machine as your app's local copy via GitHub Desktop. In this example, the folder will be called "vegalitereact".

From the Repository's Settings, scroll to the bottom, click GitHub Pages and publish the site to https://datamesse.github.io/vegalitereact/.

2. From Command Prompt, navigate to the parent directory of the empty folder.
```
create-react-app vegalitereact
cd vegalitereact
npm start
```

3. From Visual Studio Code, start building the app, and watch it render via http://localhost:3000/.

## Initial push to GitHub Pages

1. From Visual Studio Code's terminal, install GitHub Pages.
```
npm install gh-pages --save-dev
```

2. From Visual Studio Code, add homepage, predeploy, and deploy attributes to the package.json file.
```
{
  "homepage": "http://datamesse.github.io/vegalitereact/"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  },
}
```

3. From Visual Studio Code, build the deployment. Patiently wait until the last line of code "Published" appears.
```
npm run deploy
```

**Note:** It is important to let the process complete fully, otherwise you may get errors that may require rebuilding from scratch.

4. From GitHub, change the GitHub Pages setting to deploy from branch gh-pages.
5. From GitHub Desktop, push the changes (the Current branch selected should still be main by default, do not change this).

**Note:** You will only see the changes you applied to the source files in GitHub Desktop for the push, not the compiled file changes that will end up deployed to gh-pages branch. This is normal.

6. From the GitHub repository's Settings, change Source branch from main to gh-pages. Remember from GitHub Desktop, that main should remain selected as the branch for pushes.

**Note:** If you make a change to the source code and push it without building first, no changes will be reflected on the gh-pages branch. So ensure that when trying to push gh-pages build changes, that something in the source files has been changed, otherwise GitHub Desktop won't detect anything for the push.

**Note:** If you hit an error whilst performing the push, it may be relating to number/size of files being sent, in which case from GitHub Desktop, try repushing, otherwise click the History tab and undo or reverse the commits that are pending, and resend the changes in smaller amounts.

## Install Vega, Vega Lite, and Vega Embed dependencies

1. Install the dependencies
```
npm install vega
npm install vega-lite
npm install vega-embed
```

2. Create a React Component that embeds the Vega Lite specification (.vl.json file extension)

Example:

src\App.js
```
import './App.css';
import EmbeddedVisual from './components/EmbeddedVisual.js';
function App() {
  return (
    <div className="App">     
      <EmbeddedVisual />
    </div>
  );
}
export default App;
```

src\components\EmbeddedVisual.js
```
import React from 'react'
import vegaEmbed from "vega-embed";
import visual from '../visuals/yourspecification.vl.json'
export default function EmbeddedVisual() {
    return (
        <>
            <div id='vis'></div>
        </>
    )
}
vegaEmbed('#vis', visual);
```

src\visuals\yourspecification.vl.json
* Specification taken from [Vega Lite official website example: Simple Bar Chart](https://vega.github.io/vega-lite/examples/bar.html)
```
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple bar chart with embedded data.",
  "data": {
    "values": [
      {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
      {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
      {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "nominal", "axis": {"labelAngle": 0}},
    "y": {"field": "b", "type": "quantitative"}
  }
}
```