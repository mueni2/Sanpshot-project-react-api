import {useState,useEffect,useRef} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

const App = () => {
  const [data,setData] = useState({
    results:null,
    loading:true,
    error:null,
    totalPages:0
  })
  const [search,setSearch] = useState('Mountain')
  const [searchInput,setSearchInput] = useState('')
  const [page,setPage] = useState(1)

  const inputRef = useRef()

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=12&query=${search}&page=${page}`;

  const changeHandler = (e) => {
    setSearchInput(e.target.value)
    setPage(1)
  }

  const nextPage = () => {
    setPage((prevPage) => prevPage - 1)
    inputRef.current.focus()
  }

  const prevPage = () => {
    setPage((prevPage) => prevPage - 1)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput('');
  };

  useEffect(() => {
     setData({
      results:null,
      loading:true,
      error:null,
      totalPages:0
    }) 

    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const results = await response.json()
        setData({
          results,
          loading:false,
          error:null,
          totalPages:results.total_pages
        })
      } catch (error) {
        setData({results:null,loading:false,error,totalPages:0})
        
      }
    }
    fetchData()
  },[URL])
  return (
    <main>
     <Header 
     inputRef={inputRef}
     searchInput={searchInput}
     changeHandler={changeHandler}
     submitHandler={submitHandler}
     //page={page}
     totalPages={data.totalPages}
     nextPage={nextPage}
     prevPage={prevPage}
     setSearch={setSearch}
     />
     <Container data={data ? data:null} />
     <Footer />
    </main>
   /*  <section>

    </section> */
  );
};

export default App;
