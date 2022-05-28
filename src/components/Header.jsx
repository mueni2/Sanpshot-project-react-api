import React from "react";
import Button from "./Button";
import Search from "./Search";

const Header = ({
  inputRef,
  searchInput,
  changeHandler,
  submitHandler,
  nextPage,
  prevPage,
  search,
  page,
  totalPages,
  setSearch,

}) => {
  return (
    <header>
      <h1>SnapShot by Anne</h1>
      <Search 
      inputRef={inputRef}
      searchInput={searchInput}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
      search={search}
    
      />
      <h2>{search}</h2>
      {/* <div>
        <p>{page}</p>
        <p>{totalPages}</p>
      </div> */}
      <Button 
      setSearch={setSearch}/>
    </header>
  );
};

export default Header;

//<Link to="/signup" className="btn btn-primary">Sign up</Link> 
