import InputBox from "./inputBox/InputBox";
import Item from "./Items/Items";
import { CrudLayoutStyle } from "./style";


function Crud() {

    return (
        <CrudLayoutStyle>
            <h1 className="app-title">Crud App Using Recoil</h1>
            <InputBox />
            <Item />
        </CrudLayoutStyle>
    )
}
export default Crud