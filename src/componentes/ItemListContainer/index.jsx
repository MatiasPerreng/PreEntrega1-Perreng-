import './styles.css'

function ListContainer(props) {
    return (
        <div class="item-list-container">
            {props.children}
        </div>
    )
}

export default ListContainer;