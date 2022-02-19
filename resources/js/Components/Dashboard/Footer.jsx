import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer mt-auto pb-4">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="copyright text-center text-sm text-muted text-lg-start">
                            Agung © ,
                            made with <i className="fa fa-heart" /> by
                            <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank"> Creative Tim </a>
                            for a better web.
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                            <li className="nav-item">
                            <a href="https://www.creative-tim.com" className="nav-link text-muted" target="_blank">Creative Tim</a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.creative-tim.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.creative-tim.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                            </li>
                            <li className="nav-item">
                            <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
