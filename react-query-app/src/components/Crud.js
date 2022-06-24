import Item from "./Items/Items";
import { CrudLayoutStyle } from "./style";


function Crud() {

    return (
        <CrudLayoutStyle>
            <h1 className="app-title">Get Data from Dummy Api using React Query</h1>
            <Item />
        </CrudLayoutStyle>
    )
}
export default Crud