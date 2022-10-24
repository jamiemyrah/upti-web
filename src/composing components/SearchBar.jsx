import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search"/> 
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
      </div>
    )
  }
}
