import styled from "styled-components"

import perfil from "../../imagens/perfil.svg"
import sacola from "../../imagens/sacola.svg"

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`
const UlIcones = styled.ul`
    display: flex;
    align-items: center;
`
const icones = [perfil, sacola]

function Icons() {
    return (
        <UlIcones>
            {icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </UlIcones>
    )
}

export default Icons