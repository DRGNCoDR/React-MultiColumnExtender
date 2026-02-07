import React, {useState} from "react"

const PanelItemList = () => {
    const [itemName, setDisplayName] = useState("")
    const [panelItems, setItems] = useState([])

    const handleClick = () => {
        setItems(
            [
                ...panelItems,
                {
                    id : Date.now(),
                    displayName: itemName
                }
            ]
        )
    }

    const handleChange = (e) => {
        setDisplayName(e.target.value)
    }

    const itemsList = panelItems.map(
        item =>
            <li>
                {item.displayName}
            </li>
    )

    return (
        <div>
            <div>
                <input
                    name="itemNameInput"
                    style={{width:"80%"}}
                    value={itemName}
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Add</button>
            </div>
            <ul style={{listStyleType:"none", padding:"5px"}}>
                {itemsList}
            </ul>
        </div>
    )
}

export default PanelItemList