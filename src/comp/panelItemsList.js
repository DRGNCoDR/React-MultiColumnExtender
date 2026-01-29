import React from "react"

const panelItems = [
    "test",
    "Test 2",
    "Test3",
    "Test4"
]

const itemsList = panelItems.map(item => <p>{item}</p>)

const PanelItemList = () => {
    return (
        <div>
            <div>
                <input />
                <button>Add</button>
            </div>
            <ul>
                {itemsList}
            </ul>
        </div>
    )
}

export default PanelItemList