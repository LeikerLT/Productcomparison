import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/react"

export function Header() {

    const { data: session, status } = useSession()
    const loading = status === "loading"

    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            <Container>
                <div className="justify-content-start d-flex">
                    <img
                        src="/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top" />
                    <Navbar.Brand href="/">&nbsp; Pagrindinis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Pagrindinis</Nav.Link>
                            <Nav.Link href="/movies">Produktai</Nav.Link>
                            {status === "authenticated" && <Nav.Link href="/reservation">Pasitikrinti</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <>
                    <div className="justify-content-end">
                        {!session && (
                            <>
                                <span>Jūs nesate prisijungęs!&nbsp;</span>
                                <Button variant="secondary" href={`/api/auth/signin`} onClick={(e) => { e.preventDefault(); signIn(); }}>Prisijungti</Button></>

                        )}
                        {session?.user && (
                            <>
                                <span>
                                    <small>Jūs esate prisijungęs kaip:&nbsp; </small>
                                    <strong>{session.user.name} {session.user.surname} ({session.user.username}) </strong>
                                </span>
                                <Button variant="secondary" href={`/api/auth/signout`} onClick={(e) => { e.preventDefault(); signOut(); }}>Atsijungti</Button></>

                        )}
                    </div>
                </>
            </Container>
        </Navbar >

    );
}