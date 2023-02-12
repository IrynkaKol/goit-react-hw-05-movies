
import {Container, Header, Link} from './Navigation.styled'

export const Navigation = () => {
    return (
        <Container>
            <Header>
            <Link to='/'>Home</Link>
            <Link to='movies'>Movies</Link>
            </Header>
        </Container>
    )
}