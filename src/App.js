import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux';
import {name} from './store/reducer/reducer'
import { useState } from 'react';
import { lastname } from './store/reducer/last'
import { title } from './store/reducer/profession';
import { ageval } from './store/reducer/age';
import { sex } from './store/reducer/gender';
import Firstname from './pro/FirstName';
import style from './bootstrap-5.2.0-beta1-dist/css/bootstrap.min.css'
function App() {
  const user=useSelector((state)=>state.user.value);
  const last=useSelector((state)=>state.last.value);
  const profession=useSelector((state)=>state.job.value);
  const age=useSelector((state)=>state.age.value)
  const sexvalue=useSelector((state)=>state.sex.value)
  const dispatch=useDispatch();
  const [nameuser,setuser]=useState('')
  const [lastn,setlast]=useState('');
  const [gender,setgender]=useState('');
  const [jobtitle,setjobtitle]=useState('');
  const [agevalue,setagevalue]=useState(0);
  return (
    <div className="App">
      <h1 class="italic ..." className='title'>Redux Project</h1>
      <div className="input-group mb-3" >
        <div class="input-group-prepend">
        <h1 class="input-group-text" id="inputGroup-sizing-default">new</h1>

        </div>
      <input className='input' value={nameuser} placeholder='first name'onChange={(e)=>setuser(e.target.value)} />
      <button className='btn btn-primary' onClick={()=>{dispatch(name({name:nameuser}))}} > Add</button>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
        <h1 class="input-group-text" id="inputGroup-sizing-default">Last</h1>

        </div>
      <input className='input' value={lastn} placeholder='last name' onChange={(e)=>setlast(e.target.value)}/>
      <button className='btn btn-primary' onClick={()=>{dispatch(lastname({name:lastn}))}}  >Add </button>
      
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
        <h1 class="input-group-text" id="inputGroup-sizing-default">Gender:</h1>

        </div>
        <div class="input-group mb-3">
      <select placeholder='gender' class=""onChange={(e)=>{const valueg=e.target.value;setgender(valueg)}} >
        <option vlaue="default">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <button className='btn btn-primary' onClick={()=>{dispatch(sex({sex:gender}))}}>Add</button>
      </div></div>
      <div className="input-group mb-3">
        <div class="input-group-prepend">
        <h1 class="input-group-text"id="inputGroup-sizing-default">Age</h1>

        </div>
        <input className='input' type="number" value={agevalue} onChange={(e)=>setagevalue(e.target.value)}></input>
        <button className='btn btn-primary' onClick={()=>{dispatch(ageval({agevalue:agevalue}))}}>Add</button>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
        <h1 class="input-group-text" id="inputGroup-sizing-default">Job</h1>

        </div>
        <input className='input' placeholder='your profession' value={jobtitle} type='text' onChange={(e)=>setjobtitle(e.target.value)}></input>
        <button className='btn btn-primary' onClick={()=>{dispatch(title({name:jobtitle}))}}>Add</button>
      </div>
      <div>
      <ul class="list-group">
  <li class="list-group-item active">{user.name}</li>
  <li class="list-group-item">{last.name}</li>
  <li class="list-group-item">{sexvalue.sex}</li>
  <li class="list-group-item">{age.agevalue}</li>
  <li class="list-group-item">{profession.name}</li>
</ul>
      </div>
      </div>
  )
}

export default App;
