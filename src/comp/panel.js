import React, {useState} from "react";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Panel = ({title, headerBGColor}) => {
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
                        isExpanded ? (
                            <OpenInFullIcon />
                        ) : (
                            <CloseFullscreenIcon />
                        )
                    }
                </button>
            </div>

            <p>test</p>
            <p>test2</p>
            <p>test3</p>
            <p>test4</p>
        </div>
    )
}

export default Panel