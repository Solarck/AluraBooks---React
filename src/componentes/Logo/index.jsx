import styled from "styled-components"
import logo from "../../imagens/logo.svg"

const Container = styled.div`
    display: flex;
    font-size: 30px;
    margin-left: 10px;
`
const Img = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <Container>
            <Img src={logo} alt="logo" />
            <p><strong>Alura</strong>Books</p>
        </Container>
    )
}

export default Logo