import React, { useState } from 'react';

import './App.css';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './component/Header';
import StudentForm from './component/StudentForm';
import StudentList from './component/StudentList';

import data from './data.json';

function App() {
  const [ studentListData, setStudentList ] = useState(data);

  return (
    <div className="App text-start">
      <Header />
      <StudentForm />

      <StudentList studentList={studentListData} />
    </div>
  );
}

export default App;
