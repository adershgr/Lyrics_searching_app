import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Searchbar from './components/Searchbar';
import ToptenTracks from './components/ToptenTracks';

function App() {
  return (
    <div className="App">
     <nav class="navbar navbar-dark bg-dark " style={{color:"white ", width:"100%", display: "inline-block"}}>
       <a class="navbar-brand" href="#">
     Lyrics Finder
         </a>
         </nav>
  <Searchbar />
  <h3>Top Ten Tracks</h3>
  <ToptenTracks />
      
    </div>
  );
}

export default App;
