import PropTypes from 'prop-types'

function Item({marca, lancamento}){
    return(
        <>
        <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.PropTypes = {
    marca: PropTypes.string,
    lancamento: PropTypes.number,
}



export default Item