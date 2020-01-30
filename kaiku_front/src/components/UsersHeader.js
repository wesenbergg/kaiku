import React from 'react'

const UsersHeader = ({ searchInput, handleSearchInput }) => {
  return (
    <>
      <div className="user-header row justify-content-between">
        <img src="https://bit.ly/38HOjG3" alt="profiili kuva" className="d-none d-lg-block profile-thumb" />

        <div class="dropdown">
          <span role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-ellipsis-v"></i>
          </span>

          <div class="dropdown-menu users-menu" aria-labelledby="dropdownMenuLink">
            <span class="dropdown-item"><i class="fas fa-user"></i> Profile</span>
            <span class="dropdown-item"><i class="fas fa-door-open"></i> Log out</span>
          </div>
        </div>
      </div>
      <input className="form-control find-user-input" placeholder="Etsi käyttäjä (ei huumeiden)"
        value={searchInput} onChange={handleSearchInput} />
    </>
  )
}

export default UsersHeader