import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <body>
      <div className="world">
        <div className="header">
          <div className="logo">MyTestApp</div>
        </div>
        <div className="hero">
          <div className="title">Watch Something Incredible.</div>
        </div>
      </div> 
      <div className="body">
        <div className="search">
          Search
          <input type="text" className="searchBox" />
        </div>
        <div className="boxName">
          $Movie Category Name
          <div className="box">
            <div className="box1">$Movie Name</div>
            <div className="box1">$Movie Name</div>
            <div className="box1">$Movie Name</div>
            <div className="box1">$Movie Name</div>
            <div className="box1">$Movie Name</div>
          </div>
        </div>
        <div className="boxName2">
          $Movie Category Name
          <div className="box2">
            <div className="box1">$Movie Name</div>
            <div className="box1">$Movie Name</div>
            <div className="box1">$Movie Name</div>
            <div className="box1">$Movie Name</div>
            <div className="box1">$Movie Name</div>
          </div>
        </div>
      </div>
    </body>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
