import React from 'react'
import { Link } from 'react-router-dom'
import SearchUser from './SearchUser'



const SearchList = ({users}) => {
  return (
    users.map((user) => (
        <div className="searchList">
          <Link key={user._id} to={`/profile:${user._id}`} onClick={() => {this.setState({ search: '' })}}>
            <SearchUser user={user} />
          </Link>
        </div>
      ))
  )
}

export default SearchList
