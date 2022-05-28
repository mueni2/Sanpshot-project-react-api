import React from 'react'

const Button = ({setSearch}) => {

  //const 
  
  return (
    <section className='button'>
      <button onClick={() => setSearch('mountain')}>Mountain</button>
      <button onClick={() => setSearch('beaches')}>Beaches</button>
      <button onClick={() => setSearch('birds')}>Birds</button>
      <button onClick={() => setSearch('food')}>Food</button>
   {/*    <div>
      {page > 1 && <button onClick={prevPage}>Previous Page</button>}
      {page !== totalPages && <button onClick={nextPage}>Next Page</button>}
      </div> */}
    </section>
  )
}

export default Button