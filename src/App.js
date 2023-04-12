import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Aayush Mandavya</h1>
      <p>Mero naam aayush ho ani yo mero first react application ho. This is my bio!</p>

      <table>
        <tr>
        <th>SN</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone No.</th>
        </tr>

        <tr>
          <td>1</td>
         <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
           <td>32132131231</td>
  </tr>

  <tr> <td>2</td>
         <td>Bijay Futterkiste</td>
          <td>Maria Manders</td>
           <td>6455646565</td>
  </tr>
  <tr>
          <td>3</td>
         <td>Rojan Futterkiste</td>
          <td>Maria Sanders</td>
           <td>7987455321</td>
  </tr>
  <tr>
          <td>4</td>
         <td>Rohan Futterkiste</td>
          <td>Maria Ganders</td>
           <td>4664464644</td>
  </tr>

      </table>
    </div>
  );
}

export default App;
