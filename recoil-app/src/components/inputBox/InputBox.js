import { InputBoxStyle } from "./style"
import { useSetRecoilState } from "recoil"
import { useState } from "react";
import { itemState } from "../../recoil/itemRecoil";


function InputBox() {
    const setItems = useSetRecoilState(itemState);
    const [newItem, setNewItem] = useState();

    const addItem = () => {
        if (newItem != "" && newItem != null) {
            setItems((oldItems => [newItem, ...oldItems]))
            setNewItem("")
        } else
            alert('Empty value cannot store')
    }


    return (
        <InputBoxStyle>
            <div className="input-wrapper">
                <input type="text" maxLength={40} value={newItem} onChange={(e) => { setNewItem(e.target.value) }} />
                <div className="add-btn">
                    <i class="fa fa-plus fa-2x" aria-hidden="true" onClick={addItem}></i>
                </div>
            </div>
        </InputBoxStyle>
    )
}

export default InputBox