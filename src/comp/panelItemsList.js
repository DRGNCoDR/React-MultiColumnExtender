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
            <ul key={item.id}>
                <p>{item.displayName}</p>
            </ul>
    )

    return (
        <div>
            <div>
                <input value={itemName} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </div>
            {itemsList}
        </div>
    )
}

export default PanelItemList