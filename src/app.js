import React from 'react';
import Panel from './comp/panel';
function App() {

    return (
    <div>
        <h1>Multi Collumn Expander</h1>

        <label for="panelsShown">Choose the number of panels to show:</label><br />
        <input id="panelsShown" max={4} min={1} type='range' list='numPanels'/>

        <div className="panelGroup" style={{display:"flex"}}>
            <Panel title={"Books Read"} headerBGColor="Gray"/>
            <Panel title={"Calls Made"} headerBGColor="red"/>
            <Panel title={"Work out completed"} headerBGColor="green"/>
            <Panel title={"Notes taken"} headerBGColor="purple"/>
        </div>
    </div>
   );
}

export default App;