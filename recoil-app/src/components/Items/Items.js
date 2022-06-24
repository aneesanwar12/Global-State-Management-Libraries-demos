import { ItemsContainerStyle, ItemStyle } from "./style"
import { selectedItemId, itemState, isEditing, editItemId } from "../../recoil/itemRecoil"
import { useRecoilValue, useRecoilState } from "recoil"

function Item() {
    // const filteredItems = useRecoilValue(filteredData);
    const [itemId, setItemId] = useRecoilState(selectedItemId);
    const [items, setItems] = useRecoilState(itemState);
    // const deletedItem = filteredItems;

    const deleteItem = (id) => {
        const filteredItems = []
        items.map((item, key) => {
            if (key != id) {
                filteredItems.push(item)
            }
        })
        setItems(filteredItems)
    }

    console.log(items)
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