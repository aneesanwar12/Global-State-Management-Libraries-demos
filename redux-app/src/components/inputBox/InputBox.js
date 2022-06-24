import { InputBoxStyle } from "./style"
import { useState } from "react";
import { connect } from "react-redux"
import { addTodos } from "../../redux/reducer"

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};
function InputBox(props) {
    const [newItem, setNewItem] = useState();

    const addItem = () => {
        if (newItem != "" && newItem != null) {
            props.addTodo(newItem)
            setNewItem("")
        } else
            alert('Empty value cannot store')
    }

    return (
        <InputBoxStyle>
            <div className="input-wrapper">
                <input type="text" maxLength={40} value={newItem} onChange={(e) => { setNewItem(e.target.value) }} />
                <div className="add-btn">
                    <i className="fa fa-plus fa-2x" aria-hidden="true" onClick={addItem}></i>
                </div>
            </div>
        </InputBoxStyle >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBox)