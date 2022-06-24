import { ItemsContainerStyle, ItemStyle } from "./style"
import { useQuery } from 'react-query'
import axios from 'axios'


async function fetchPosts() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

function Item() {
    const { isLoading, isError, data, error } = useQuery('posts', fetchPosts);

    return (
        <ItemsContainerStyle>
            {
                isLoading ? <><p>Loading ...</p></>
                    : isError ? <p>{error.message}</p> :
                        data.map(item => (
                            <ItemStyle>
                                <div className="item-name">
                                    {item.name}
                                </div>
                                <div className="item-delete-btn">
                                    {item.id}
                                </div>
                            </ItemStyle>
                        ))
            }
        </ItemsContainerStyle>
    )
}

export default Item