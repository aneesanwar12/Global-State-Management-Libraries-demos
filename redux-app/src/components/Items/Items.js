import { ItemsContainerStyle, ItemStyle } from "./style"
import { removeTodos } from "../../redux/reducer";
import { connect } from "react-redux"


const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodos(id))
    };
};


function Item(props) {
    const { removeTodo, todos } = props;
    return (
        <ItemsContainerStyle>
            {todos.map((item, key) => (
                <ItemStyle>
                    <div className="item-name">
                        {item}
                    </div>
                    <div className="item-delete-btn">
                        <i className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={() => { removeTodo(key) }}></i>
                    </div>
                </ItemStyle>
            ))}
        </ItemsContainerStyle>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)