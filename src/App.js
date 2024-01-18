import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');


  const [ageGroup1to18, setAgeGroup1to18] = useState([]);
  const [ageGroup19to25, setAgeGroup19to25] = useState([]);
  const [ageGroup25to45, setAgeGroup25to45] = useState([]);
  const [ageGroupAbove45, setAgeGroupAbove45] = useState([]);

  const handleDragStart = (event, person, source) => {
    event.dataTransfer.setData('person', JSON.stringify(person));
    event.dataTransfer.setData('source', source);
  };

  const handleDrop = (event, target) => {
    event.preventDefault();
    const person = JSON.parse(event.dataTransfer.getData('person'));
    const source = event.dataTransfer.getData('source');

    switch (source) {
      case 'ageGroup1to18':
        setAgeGroup1to18((prev) => prev.filter((p) => p.name !== person.name));
        break;
      case 'ageGroup19to25':
        setAgeGroup19to25((prev) => prev.filter((p) => p.name !== person.name));
        break;
      case 'ageGroup25to45':
        setAgeGroup25to45((prev) => prev.filter((p) => p.name !== person.name));
        break;
      case 'ageGroupAbove45':
        setAgeGroupAbove45((prev) => prev.filter((p) => p.name !== person.name));
        break;
      default:
        break;
    }

    switch (target) {
      case 'ageGroup1to18':
        setAgeGroup1to18((prev) => [...prev, person]);
        break;
      case 'ageGroup19to25':
        setAgeGroup19to25((prev) => [...prev, person]);
        break;
      case 'ageGroup25to45':
        setAgeGroup25to45((prev) => [...prev, person]);
        break;
      case 'ageGroupAbove45':
        setAgeGroupAbove45((prev) => [...prev, person]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && age !== "" && email !== "" && place !== '') {
      const person = { name, age, email, place };
      if (age >= 1 && age <= 18) {
        setAgeGroup1to18((prev) => [...prev, person]);
      } else if (age >= 19 && age <= 25) {
        setAgeGroup19to25((prev) => [...prev, person]);
      } else if (age >= 26 && age <= 45) {
        setAgeGroup25to45((prev) => [...prev, person]);
      } else {
        setAgeGroupAbove45((prev) => [...prev, person]);
      }
      setName('');
      setAge('');
      setEmail('');
      setPlace('');
    } else {
      alert('Please Fill All Fields.')
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setName('');
    setAge('');
    setEmail('');
    setPlace('');
  };
  return (
    <div className="container">
      <div className="row">
        {/* Form Column */}
        <form>
          <div className='row'>
            <div className="form-group col-md-6 col-lg-6">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control rounded-0"
                placeholder='Enter Name'
              />
            </div>
            <div className="form-group  col-md-6 col-lg-6">
              <label>Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control rounded-0"
                placeholder='Enter Age'
              />
            </div>
            <div className="form-group  col-md-6 col-lg-6">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control rounded-0"
                placeholder='Enter Email'

              />
            </div>
            <div className="form-group  col-md-6 col-lg-6">
              <label>Place:</label>
              <input
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="form-control rounded-0"
                placeholder='Enter Place'

              />
            </div>
            <div className="form-group  col-md-6 col-lg-6 mt-3">
              <button onClick={handleSubmit} className="btn btn-primary rounded-0 px-4 me-2">Add</button>
              <button onClick={reset} className="btn btn-primary rounded-0">Cancel</button>
            </div>
          </div>
        </form>

        {/* Display Columns */}
        <div className="row mt-3" style={{ padding: '0 0 0 24px' }}>
          <div
            id="ageGroup1to18"
            className='col-md-3 col-lg-3 border'
            onDrop={(e) => handleDrop(e, 'ageGroup1to18')}
            onDragOver={(e) => e.preventDefault()}
          >
            <p className='m-0 text-center'>Age 1-18 </p>
            {ageGroup1to18.map((person, index) => (
              <div class="card" key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, person, 'ageGroup1to18')}
                className="draggable-item bg-light p-2 mb-2 " style={{ cursor: 'pointer' }}>
                <div class="card-body">
                  <h5 class="card-title"> {person.name}</h5>
                  <p class="card-text m-0">Age: {person.age}</p>
                  <p class="card-text m-0">Email: {person.email}</p>
                  <p class="card-text m-0">Place: {person.place}</p>
                </div>
              </div>
            ))}
          </div>


          <div
            id="ageGroup19to25"
            className='col-md-3 col-lg-3 border'
            onDrop={(e) => handleDrop(e, 'ageGroup19to25')}
            onDragOver={(e) => e.preventDefault()}
          >
            <p className='m-0 text-center '>Age 19-25 </p>
            {ageGroup19to25.map((person, index) => (
              <div class="card" key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, person, 'ageGroup19to25')}
                className="draggable-item bg-light p-2 mb-2 " style={{ cursor: 'pointer' }}>
                <div class="card-body">
                  <h5 class="card-title"> {person.name}</h5>
                  <p class="card-text m-0">Age: {person.age}</p>
                  <p class="card-text m-0">Emal: {person.email}</p>
                  <p class="card-text m-0">Place: {person.place}</p>
                </div>
              </div>

            ))}
          </div>
          <div
            className='col-md-3 col-lg-3 border'
            id="ageGroup25to45"
            onDrop={(e) => handleDrop(e, 'ageGroup25to45')}
            onDragOver={(e) => e.preventDefault()}
          >
            <p className='m-0 text-center'>Age 26-45 </p>
            {ageGroup25to45.map((person, index) => (
              <div class="card" key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, person, 'ageGroup25to45')}
                className="draggable-item bg-light p-2 mb-2 " style={{ cursor: 'pointer' }}>
                <div class="card-body">
                  <h5 class="card-title"> {person.name}</h5>
                  <p class="card-text m-0">Age: {person.age}</p>
                  <p class="card-text m-0">Emal: {person.email}</p>
                  <p class="card-text m-0">Place: {person.place}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            id="ageGroupAbove45"
            onDrop={(e) => handleDrop(e, 'ageGroupAbove45')}
            onDragOver={(e) => e.preventDefault()}
            className='col-md-3 col-lg-3 border'
          >
            <p className='m-0 text-center'>Age 45+</p>
            {ageGroupAbove45.map((person, index) => (
              <div class="card" key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, person, 'ageGroupAbove45')}
                className="draggable-item bg-light p-2 mb-2 " style={{ cursor: 'pointer' }}>
                <div class="card-body">
                  <h5 class="card-title"> {person.name}</h5>
                  <p class="card-text m-0">Age: {person.age}</p>
                  <p class="card-text m-0">Emal: {person.email}</p>
                  <p class="card-text m-0">Place: {person.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
