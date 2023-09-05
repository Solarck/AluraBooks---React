import styled from "styled-components"

const Opcoes = styled.ul`
    display: flex;
`
const OpcoesLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    font-size: 16px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <OpcoesLi><p>{texto}</p></OpcoesLi>
            ))}
        </Opcoes>
    )
}

export default OptionsHeader