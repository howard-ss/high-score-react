// import logo from './logo.svg';
import './App.css';
import allCountryScores from './Scores';
import HighScoreTable from './HighScoreTable';


function App() {

  const sortedCountryScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="App">
      <h1 style={{ color: "skyblue" }}>High Scores Per Country</h1>

      {/* {allCountryScores.map((country, index) => (
        <HighScoreTable
          key={index}
          country={country.name}
          players={country.scores}
        />
      ))} */}
      {sortedCountryScores.map((country, index) => (
        <HighScoreTable
          key={index}
          country={country.name}
          players={country.scores}
        />
      ))}
    </div>
  );
}

export default App;
