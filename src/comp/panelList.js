import React, { useState } from 'react'
import Panel from './panel'

function List() {
    const [shownPanels, setShownPanels] = useState(0)

    const panelList = []

    const updateShownPanels = (event) => {
        let value = event.target.value ++
        setShownPanels(value)
    }

    const panels = [
        {title : "Books", headerColor : "red", fontColor : "white"},
        {title : "Podcast", headerColor : "blue", fontColor : "white"},
        {title : "Games", headerColor : "Gray", fontColor : "white"},
        {title : "Blog", headerColor : "purple", fontColor : "white"},
    ]

    panels.forEach((panel, index) => {
        if (index < shownPanels){
            panelList.push(
                <Panel
                    title={panel.title}
                    headerBGColor={panel.headerColor}
                    fontColor={panel.fontColor}
                />
            )
        }
    })

    return (
        <div>
            <label ># of panels to show:</label><br />

            <input
                max={4}
                type='range'
                list='numPanels'
                onChange={updateShownPanels}
                value={shownPanels}
            />

            {shownPanels}

            <div
                className="panelGroup"
                style={{display:"flex", marginTop:"10px"}}
            >
                {panelList}
            </div>
        </div>
    )
}

export default List