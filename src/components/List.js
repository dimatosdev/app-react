import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca = "Ferrari" lancamento={1964}/>
            <Item marca = "Ford" lancamento={1968}/>
           

        </ul>
        </>


    )
}

export default List