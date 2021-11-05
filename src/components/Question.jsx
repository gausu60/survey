import React from 'react'

export default function Question(props) {
    return (
        <div className="container-fluid">
            <div className="col-md-5 m-auto">
                <div className="mt-3">
                    <div className="card text-left">
                        <div className="card-body">
                            <form onSubmit={props.submit}>
                                <div className="form-group">
                                    <label htmlFor="">
                                        {" "}
                                        <b>3.</b> What are you Currently doing?
                                    </label><br />
                                    <input type="radio" id="Teacher" name="q1" value="Teacher" autoComplete="off" />
                                    <label htmlFor="teacher">Teaching</label>
                                    <input type="radio" id="Student" name="q1" value="Student" autoComplete="off" />
                                    <label htmlFor="student">Student</label>
                                    <input type="radio" id="Programmers" name="q1" value="Programmers" autoComplete="off" />
                                    <label htmlFor="programmer">Programmers</label>

                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                            </form>
                            <center>
                                <span className="badge badge-pill badge-disabled">
                                    1
                                </span>
                                <span className="badge badge-pill badge-primary">
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
