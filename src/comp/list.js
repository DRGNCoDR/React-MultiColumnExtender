import React, { useState } from 'react';
import Panel from './panel';

function List() {
    const [shownPanels, setShownPanels] = useState(0)

    const panelList = []

    const updateShownPanels = (event) => {
        let value = event.target.value ++
        setShownPanels(value)
    }

    const panels = [
        {title : "Books", headerColor : "red"},
        {title : "Books", headerColor : "blue"},
        {title : "Books", headerColor : "Gray"},
        {title : "Books", headerColor : "purple"},
    ]

    panels.forEach((panel, index) => {
        if (index < shownPanels){
            panelList.push(
                <Panel title={panel.title} headerBGColor={panel.headerColor}/>
            )
        }
    })

    return (
        <div>
            <label >Choose the number of panels to show:</label><br />
            <input
                max={4}
                type='range'
                list='numPanels'
                onChange={updateShownPanels}
                value={shownPanels}
            />
            <p>{shownPanels}</p>
            <div className="panelGroup" style={{display:"flex"}}>
                {panelList}
            </div>
        </div>
    )
}

export default List