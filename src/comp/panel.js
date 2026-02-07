import React, {useState} from "react"
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import PanelItemList from  './panelItemsList'

const Panel = ({title, headerBGColor, fontColor}) => {
    const [isExpanded, setExpanded] = useState("false");

    const panel = {
        width:  isExpanded ? "25%" : "50%",
        border: "1px solid black",
        padding: "2px",
        margin: "2px"
    }
    const flex = {
        display: "flex"
    }
    const panelHeader = {
        backgroundColor: headerBGColor,
        color: fontColor,
        margin: "2px",
        width: "100%",
        padding: "5px"
    }

    return(
        <div
            className={`${isExpanded ? "panelExpanded" : "panelCollapse"}`}
            style={panel}
        >
            <div style={flex}>
                <h4 style={panelHeader}>
                    {title}
                </h4>
                <button
                    className={"btn fa-solid fa-expand"}
                    onClick={() => setExpanded(!isExpanded)}
                    style={{float:"right"}}
                >
                    {
                        isExpanded
                            ? (<OpenInFullIcon /> )
                            : (<CloseFullscreenIcon />)
                    }
                </button>
            </div>
            <div>
                <PanelItemList />
            </div>
        </div>
    )
}

export default Panel