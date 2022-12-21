import Button from "./evento/Button"
function Evento({}) {
    function meuEvento() {
        console.log("Evento 1")
    }

    function segundoEvento() {
        console.log("Evento 2")
        
    }

    return (
        <div>
            <p>Clique Evento</p>
            <Button event={meuEvento} text="Evento1"/>
            <Button event={segundoEvento} text="Evento2"/>
        </div>
    )
}

export default Evento