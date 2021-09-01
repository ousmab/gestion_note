import React from 'react'


function Main() {
    let img = process.env.PUBLIC_URL+"/school.png"
    return (
       
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={img} alt="..." /></div>
                    <div className="col-md-6">
                        
                        <h1 className="display-5 fw-bolder">A powerful note manager for You !</h1>
                       
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark" type="button">
                               Connectez-vous !</button>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Main;