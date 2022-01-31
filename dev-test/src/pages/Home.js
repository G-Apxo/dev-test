import { Container } from "../components/styles/Container.styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../components/styles/Global";
import Card from "../components/Card";

function Home() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Container>
                <Card />
            </Container>
            <Footer />
        </>
    );
}

export default Home;
