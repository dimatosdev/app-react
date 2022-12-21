function Evento({numero}) {
    function meuEvento() {
        console.log(`Ativado ${numero}`)
    }

    return (
        <div>
            <p></p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento