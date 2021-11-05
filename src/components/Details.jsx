import React from 'react'

export default function Details(props) {
    return (
        <div className="container-fluid">
            <div className="col-md-5 m-auto">
                <div className="mt-3">
                    <div className="card text-left">
                        <div className="card-body">
                            <form onSubmit={props.submit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Please Enter Your Name" autoComplete="off" required />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="Please Enter Your Email" autoComplete="off" required />

                                </div>
                                <button type="submit" className="btn btn-primary">Next</button>
                            </form>
                            <center>
                                <span className="badge badge-pill badge-primary">
                                    1
                                </span>
                                <span className="badge badge-pill badge-disabled">
                                    2
                                </span>
                            </center>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
