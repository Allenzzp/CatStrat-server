import React, {useState} from 'react'
import "./SearchBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({placeholder, data, tab, setTab}) => {
  let navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([])
  const [onSearch, setOnSearch] = useState("")

  const handleFilter = (e) => {
    const search = e.target.value
    setOnSearch(search)

    const newFilter = data.filter((value) => {
      return value.username.toLowerCase().includes(search.toLowerCase());
    })
    if (search === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter);
    }
  }

  const clearInput = () => {
    setFilteredData([]);
    setOnSearch("");
  }

  const profileRoute = (userID) => {
    setTab('Profile')
    navigate(`/profile/${userID}`)
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" 
          placeholder={placeholder}  
          value={onSearch} 
          data={data} 
          onChange={handleFilter}/>
        <div className="searchIcon">
          {filteredData.length === 0 ? 
          <SearchIcon id="search-btn"/> 
          : 
          <CloseIcon id="clear-btn" onClick={clearInput}/>}
        </div>
      </div>
      {filteredData.length !== 0 && (<div className="dataResult">
        {filteredData.slice(0, 15).map((item) => {
          return <a className="dataItem" href="" onClick={() => { profileRoute(item.id)}}>
                    <p className="search-row"><Avatar id="img-id" src={`${item.avatar_url}`}/>{item.username}</p>
                  </a>
        })}
      </div>)}
    </div>
  )
}

export default SearchBar;