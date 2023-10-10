import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Quote() {
    const [quote, setQuote] = useState('');

    async function fetchRandomQuote() {
        try {
            const response = await fetch("https://api.quotable.io/random");
            if (!response.ok) {
                throw new Error("Failed to fetch a quote");
            }
            const data = await response.json();
            return data.content;
        } catch (error) {
            console.error(error);
            return "An error occurred while fetching the quote.";
        }
    }

    async function generateRandomQuote() {
        const randomQuote = await fetchRandomQuote();
        setQuote(randomQuote);
    }

    useEffect(() => {
        generateRandomQuote();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="navbar-brand">Quotez</Link>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br />
            <br />
            <br />
            <br />
            <Container className="flex-grow-1 mt-5">
                <div className="text-center">
                    <h1>Random Quote Generator</h1>
                    <em id="quote">{quote}</em>
                    <br />
                    <br />
                    <Button id="generateButton" variant="primary" onClick={generateRandomQuote}>Generate Quote</Button>
                </div>
            </Container>

            <footer className="bg-dark text-light pt-4">
                <Container>
                    <div className="row">
                        <div className="row py-3">
                            <h3 className="text-center"><em>Quotez</em></h3>
                        </div>
                        <div className="col-md-6">
                            <p>Phone : +62 851-5503-5225</p>
                            <p>Address : Del Institute of Technology</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <p>Follow me on:</p>
                            <Link to="https://www.facebook.com/kevin.samosir.505" target="_blank" className="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 320 512" style={{ fill: "#044cff" }}>
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                </svg>
                            </Link>
                            <Link to="https://www.instagram.com/kevinsmr__/" target="_blank" className="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512" style={{ fill: "#044cff" }}>
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </Link>
                            <Link to="https://www.linkedin.com/in/kevin-samosir-926a45207/" target="_blank" className="mx-2" style={{ fill: "#044cff" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <p className="text-center mt-3">&copy; 2023 KipinQuotes</p>
                </Container>
            </footer>
        </div>
    );
}

export default Quote;
