import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="text" placeholder="Search Git Users...."></input>
                    <input type="submit" value="search" className="btn"></input>
                </form>
            </div>
        )
    }
}

export default Search
