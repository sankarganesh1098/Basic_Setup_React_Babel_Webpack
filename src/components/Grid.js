import React,{Component} from 'react'


export default class Grid extends Component{
    render(){
        return(
            <div>
            <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>

            </table>

            </div>
        )
    }
}