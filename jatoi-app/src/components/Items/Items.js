import { ItemsContainerStyle, ItemStyle } from "./style"
import { itemState } from "../../jotai/itemJotai"
import { useAtom } from "jotai"

function Item() {
    const [items, setItems] = useAtom(itemState);

    const deleteItem = (id) => {
        const filteredItems = []
        items.map((item, key) => {
            if (key != id) {
                filteredItems.push(item)
            }
        })
        setItems(filteredItems)
    }
    return (
        <ItemsContainerStyle>
            {
                items.map((item, key) => (
                    <ItemStyle>
                        <div className="item-name">
                            {item}
                        </div>
                        <div className="item-delete-btn">
                            <i class="fa fa-trash-o fa-2x" aria-hidden="true" onClick={() => { deleteItem(key) }}></i>
                        </div>
                    </ItemStyle>
                ))
            }
        </ItemsContainerStyle>
    )
}

export default Item