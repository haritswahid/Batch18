import { useState } from 'react';
import './App.css';
import CountryView from './view/CountryView';
import DepartmentView from './view/DepartmentView';
import EmployeeView from './view/EmployeeView';
import JobHistoryView from './view/JobHistoryView';
import JobView from './view/JobView';
import LocationView from './view/LocationView';
import RegionView from './view/RegionView';

function App() {
  const views = [
    {
      titles: 'Region',
      view: <RegionView/>,
    },
    {
      titles: 'Country',
      view: <CountryView/>,
    },
    {
      titles: 'Location',
      view: <LocationView/>,
    },
    {
      titles: 'Job',
      view: <JobView/>,
    },
    {
      titles: 'Employee',
      view: <EmployeeView/>,
    },
    {
      titles: 'Department',
      view: <DepartmentView/>,
    },
    {
      titles: 'Job History',
      view: <JobHistoryView/>,
    },
  ];
  const [idx, setIdx] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          {
            views.map((reg,idx) => <button style={{ margin: '5px' }} onClick={() => setIdx(idx)}>{reg.titles}</button>)
          }
        </div>
        <h2>{views[idx].titles}</h2>
        {
          views[idx].view
        }
      </header>
    </div>
  );
}

export default App;
