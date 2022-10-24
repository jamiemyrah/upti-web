import React, { Component } from 'react';

export default class Example1 extends Component {
    handButtonClick = () => {
        console.log('button clicked');
        alert('Hello')
        console.log("this.props.numbers");
    };

    handleAdd = () => {
      const firstName = document.getElementById('firstNameInput').value;
      const lastName = document.getElementById('lastNameInputId').value;
      const newItems = [ ...this.state.items];
      newItems.push({
      firstName,
      lastName,
      id:this.state.items.length +1
      });
      
      this.setState({items: newItems});
    };

     handleDelete=(id)=>{
      const people = this.state.items.filter(function(item){
        return item.id !== id;
      });
      this.setState({
        items: people
      })
    };
    handleAgeIncreament = (id) => {
      const people = this.state.items.map(function (item) {
        if (item.id === id) {
          item.age = item.age + 1;
        }
        return item;
      });
      this.setState({ items: people });
    }
    


    handleLastNameChange = (id, inputId) => {
      console.log("Changed");
      const name = document.getElementById(inputId).value;
      const people = this.state.items.map(function (items) {
        if (items.id === id) {
          return { 
            id: items.id,
            firstName: items.firstName,
            lastName: name,
            age: 1
          }
        }
        return { ...items};
      }
      );

      this.setState({items: people});
     };

    state = {
        items:[
             {
            id: 1,
            firstName: 'Jamirah',
            lastName: 'Nakkungu',
            age: 1
        },
          {
            id: 2,
            firstName: 'Winnie',
            lastName: 'Sakaru',
            age: 1
        },
          {
            id: 3,
            firstName: 'Shaban',
            lastName: 'Asiimwe',
            age: 1
        },
          {
            id: 4,
            firstName: 'Paul',
            lastName: 'sentamu',
            age: 1,
        },
          {
            id: 5,
            firstName: 'Steven',
            lastName: 'Bunjo',
            age: 1
        },
            {
            id: 6,
            firstName: 'Abubakar',
            lastName: 'Semugooma',
            age: 1
        }
        ]
    };

  render() {

    return (
      <div className="container">
      <div className="row d-flex  justify-content-evenly" styles={{margin: 32}}>
        <div className = "col-3 ">
          <input id="firstNameInput" class="control"/>
        </div>
        <div className="col-3">
          <input id="lastNameInput" class="control"/>
        </div>
        <div className="col-3">
          <button onClick={()=>this.handleAdd()}
           className="btn btn-primary" >Add</button>
        </div>
      </div>
      
       <table className="table table-bordered table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>Delete</th>
                <th>IncrementAge</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
                {this.state.items.map((item,index) => (
                    <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.firstName}</td>
                    <td>
                       <input 
                          id={"input-field_"+index}
                          className="control control-lg" 
                          value={item.lastName} 
                          onChange={()=>this.handleLastNameChange(item.id,
                             "input-field_"+index)} 
                      ></input>
                    </td>
                    <td>
                        <button onClick={()=>this.handleDelete(item.id)}
                         className="btn btn-danger">Delete</button>
                    </td>
                    <td>
                        <button onClick={()=>this.handleAgeIncreament(item.id)}
                         className="btn btn-success">Increment Age</button>
                    </td>
                    <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
            </table>
       
        <button  className={'btn btn-primary m-10'}onClick={()=>this. handButtonClick()}>click me</button>
      </div>
      )
  }

}

