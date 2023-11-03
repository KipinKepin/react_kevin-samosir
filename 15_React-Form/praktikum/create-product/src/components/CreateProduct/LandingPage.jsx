import React from 'react'
import gambar from "./hero-img.png.svg"
import { NavLink } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            <div className="content">
                <div className="text">
                    <h1>Better Solutions For Your Business</h1>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                    <div className="button">
                        <NavLink to={'/create'} id="warna">Get Started</NavLink>
                        <div id="watch">Watch Video</div>
                    </div>
                </div>
                <div className="img">
                    <img src={gambar} alt="gambar" />
                </div>
            </div>

            <div className="bawah">
                <h3>Join Our Newsletter</h3>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <div className="isi">
                    <input type="text" />
                </div>
            </div>

            <footer>
                <div>
                    <h3>ARSHA</h3>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                    <p>United States</p>
                </div>
                <div>
                    <h5>Useful</h5>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h5>Our Services</h5>
                    <p>Web Design</p>
                    <p>Web Development</p>
                    <p>Product Manager</p>
                    <p>Marketing</p>
                    <p>Graphic Design</p>
                </div>
                <div>
                    <h5>Our Social Networks</h5>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <p>Menggunakan repository pada github</p>
                    <p>Melakukan Commit dan Pull Request</p>
                    <p>Mengenal forkflow pada git dan github</p>
                </div>
            </footer>
            <div className="copyright">
                <div className="kiri">
                    &#169; Copyright <strong>Arsha</strong>. All Rights Reserved
                </div>
                <div className="kanan">Designed by <p>BootstrapMade</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage