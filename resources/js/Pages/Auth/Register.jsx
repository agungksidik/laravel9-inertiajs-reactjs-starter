import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Auth from '../../Layouts/Auth'

export default function Register({ errors }) {
    const {data, setData, post} = useForm({
        name: '', username: '', email: '', password:'',
    })

    const changeHandler = (e) => setData({...data, [e.target.id]: e.target.value})

    const submitHandler = (e) => {
        // console.log(data);
        e.preventDefault()
        post(route('register'), data);
    }
    return (
        <>
            <div>
                <main className="main-content  mt-0">
                    <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg")', backgroundPosition: 'top'}}>
                    <span className="mask bg-gradient-dark opacity-6" />
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-5 text-center mx-auto">
                            <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                            <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
                        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                        <div className="card z-index-0">
                            <div className="card-header text-center pt-4">
                            {/* <h5>Register with</h5> */}
                            </div>
                            <div className="row px-xl-5 px-sm-4 px-3 d-flex justify-content-center">
                            <div className="col-12 px-1 inline-block">
                                <a className="btn btn-outline-light w-100 inline-block" href={route('auth.google')} >
                                    <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g transform="translate(3.000000, 2.000000)" fillRule="nonzero">
                                        <path d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267" fill="#4285F4" />
                                        <path d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667" fill="#34A853" />
                                        <path d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782" fill="#FBBC05" />
                                        <path d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769" fill="#EB4335" />
                                    </g>
                                    </g>
                                    </svg>
                                    &nbsp;&nbsp;
                                    <span className='fw-bold text-dark'>Sign In with Google</span>
                                </a>
                            </div>
                            <div className="mt-2 position-relative text-center">
                                <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                                or
                                </p>
                            </div>
                        </div>
                            <div className="card-body">
                            <form role="form" onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <input value={data.name} onChange={changeHandler} name='name' id='name' type="text" className="form-control" placeholder="Name" aria-label="Name" />
                                    {errors && (<div className='text-danger mt-1'>{errors.name}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.username} onChange={changeHandler} name='username' id='username' type="text" className="form-control" placeholder="Username" aria-label="Username" />
                                    {errors && (<div className='text-danger mt-1'>{errors.username}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.email} onChange={changeHandler} type="email" name='email' id='email' className="form-control" placeholder="Email" aria-label="Email" />
                                    {errors && (<div className='text-danger mt-1'>{errors.email}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.password} onChange={changeHandler} type="password" name='password' id='password' className="form-control" placeholder="Password" aria-label="Password" />
                                    {errors && (<div className='text-danger mt-1'>{errors.password}</div>)}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                                </div>
                                <p className="text-sm mt-3 mb-0 text-center">
                                    Already have an account? {''}
                                    <Link href={route('login')} className="text-dark font-weight-bolder">Sign in</Link>
                                </p>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </main>
                <footer className="footer py-5">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4 mx-auto text-center">
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Company
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            About Us
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Team
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Products
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Blog
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                            Pricing
                        </a>
                        </div>
                        <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-dribbble" />
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-twitter" />
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-instagram" />
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-pinterest" />
                        </a>
                        <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                            <span className="text-lg fab fa-github" />
                        </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 mx-auto text-center mt-1">
                        <p className="mb-0 text-secondary">
                            Copyright ©  Soft by Creative Tim.
                        </p>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

Register.layout = (page) => <Auth children={page} title={"Register"}/>

