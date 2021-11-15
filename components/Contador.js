const Contador = () => {

    const [contador, setContador] = React.useState(0)

    const [numero, setNumero] = React.useState(0)

    const aumentar = () => { setContador(contador + 1); }

    const disminuir = () => { setContador(contador - 1) }


    return (
        <div class="m-3 card">
            <div className={"card-header " + (contador < 0 ? "menor" : "mayor")} >Contador: {contador}</div>
            <div class="row">
                <button class="btn btn-primary m-4 col" onClick={aumentar} > Aumentar</button>
                <button class="btn btn-primary m-4 col" onClick={disminuir} > Disminuir</button>

            </div>

        </div>
    )
}
