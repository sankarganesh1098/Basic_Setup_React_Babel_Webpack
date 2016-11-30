import React,{Component} from 'react'


export default class Registration extends Component{
    render(){
        return(
            <div>
            <div><h1>Registration Form</h1></div>
                <form>
                    <div className="form-group">
                    <label for="Name">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="Name">Age</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Age" />
                    </div>
                    <div className="form-group">
                        <label for="Name">Phone</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    </div>
                </form>
            </div>
        );
    }
}