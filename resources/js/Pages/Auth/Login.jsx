import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Auth from '../../Layouts/Auth'

export default function Login({ errors }) {
    const {data, setData, post} = useForm({
        email: '', password:'', remember:'',
    })

    const changeHandler = (e) => setData({...data, [e.target.id]: e.target.value})

    const submitHandler = (e) => {
        e.preventDefault()
        post(route('login'), data);
    }
    return (        
        <>
            <div className="page-header min-vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                            <div className="card card-plain">
                                <div className="card z-index-0">
                                    <div className="card-header text-center pt-4">
                                        <h5>Register with</h5>
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
                                        <form role="form" onSubmit={submitHandler} noValidate>
                                            <div className="mb-3">
                                                <input value={data.email} onChange={changeHandler} type="email" name='email' id='email' className="form-control form-control-lg" placeholder="Email" aria-label="Email" />
                                                {errors && (<div className='text-danger mt-1'>{errors.email}</div>)}
                                            </div>
                                            <div className="mb-3">
                                                <input  value={data.password} onChange={changeHandler} type="password" name='password' id='password' className="form-control form-control-lg" placeholder="Password" aria-label="Password" />
                                                {errors && (<div className='text-danger mt-1'>{errors.password}</div>)}

                                            </div>
                                            <div className="form-check form-switch">
                                                <input  value={data.remember} onChange={(e) => setData({...values, remember: e.target.checked})} name='remember' id='remember' className="form-check-input" type="checkbox" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                        <p className="mb-4 text-sm mx-auto">
                                            Don't have an account? {' '}
                                            <Link href={route('register')} className="text-primary text-gradient font-weight-bold">Sign up</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                        <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg")', backgroundSize: 'cover'}}>
                            <span className="mask bg-gradient-primary opacity-6" />
                            <h4 className="mt-5 text-white font-weight-bolder position-relative">"Attention is the new currency"</h4>
                            <p className="text-white position-relative">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}

Login.layout = (page) => <Auth children={page} title={"Login"}/>