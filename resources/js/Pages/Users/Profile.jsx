import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react'
import Base from '../../Layouts/Base'

export default function Profile(props) {
    const { auth } = usePage().props;

    const {data, setData, put, reset, errors} = useForm({ name: auth.user.name, email: auth.user.email, username: auth.user.username, address: auth.user.address, });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('users.update', auth.user.id), {
            data, 
            onSuccess: () => {
               
            }, 
        });
    }

    return (
        <>
            <div>
                <div className="card shadow-lg mx-4 my-3">
                    <div className="card-body p-3">
                    <div className="row gx-4">
                        <div className="col-auto">
                        <div className="avatar avatar-xl position-relative">
                            <img src="/img/team-2.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                        </div>
                        </div>
                        <div className="col-auto my-auto">
                        <div className="h-100">
                            <h5 className="mb-1">
                            {auth.user.name}
                            </h5>
                            {/* <p className="mb-0 font-weight-bold text-sm">
                            Public Relations
                            </p> */}
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid py-4">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <form onSubmit={onSubmit}>
                                <div className="card-header pb-0">
                                    <div className="d-flex align-items-center">
                                    <p className="mb-0">Edit Profile</p>
                                    <button type='submit' className="btn btn-primary btn-sm ms-auto">Save</button>
                                    </div>
                                </div>
                                <div className="card-body">                                
                                    <p className="text-uppercase text-sm">User Information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label htmlFor="username" className="form-control-label">Username</label>
                                            <input className="form-control" type="text" name='username' value={data.username} onChange={onChange} id="username" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label htmlFor="email" className="form-control-label">Email address</label>
                                            <input className="form-control" type="email" name='email' value={data.email} onChange={onChange} id="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                            <label htmlFor="name" className="form-control-label">Name</label>
                                            <input className="form-control" type="text" name='name' value={data.name} onChange={onChange} id="name" />
                                            </div>
                                        </div>
                                        
                                        </div>
                                        <hr className="horizontal dark" />
                                        <p className="text-uppercase text-sm">Contact Information</p>
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                            <label htmlFor="address" className="form-control-label">Address</label>
                                            <input className="form-control" type="text" name='address' value={data.address} onChange={onChange} id="address" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-profile pb-7">
                            <img src="/img/bg-profile.jpg" alt="Image placeholder" className="card-img-top" />
                            <div className="row justify-content-center">
                                <div className="col-4 col-lg-4 order-lg-2">
                                <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                                    <a href="javascript:;">
                                    <img src="/img/team-2.jpg" className="rounded-circle img-fluid border border-2 border-white" />
                                    </a>
                                </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

Profile.layout = (page) => <Base children={page} title={"Profile"}/>

