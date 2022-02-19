import React from 'react'

export default function FormUser({errors, submit, data, setData}) {
    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    return (
        <>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="name" className="col-form-label">Name:</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                    {errors && <div className='text-danger mt-1'>{errors.name}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="username" className="col-form-label">Username:</label>
                    <input type="text" className="form-control" name='username' value={data.username} onChange={onChange} id="username"/>
                    {errors && <div className='text-danger mt-1'>{errors.username}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-form-label">Email:</label>
                    <input type="email" className="form-control" name='email' value={data.email} onChange={onChange} id="email"/>
                    {errors && <div className='text-danger mt-1'>{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="col-form-label">Address:</label>
                    <input type="text" className="form-control" name='address' value={`${data.address || ''}`} onChange={onChange} id="address"/>
                    {errors && <div className='text-danger mt-1'>{errors.address}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="col-form-label">Password:</label>
                    <input type="password" className="form-control" name='password' value={`${data.password || ''}`} onChange={onChange} id="password"/>
                    {errors && <div className='text-danger mt-1'>{errors.password}</div>}
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn bg-gradient-primary">{submit}</button>
            </div>
        </>
    )
}
