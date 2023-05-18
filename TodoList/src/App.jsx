import React from 'react';
import { useState } from 'react';
import Add from './component/Item1';
import Task from './component/Item2';
import './style.css';

function App() {
    const [arr, setArr] = useState([{
        id: 1,
        name: 'React',
        description: 'Learn hooks'
    },
    {
        id: 2,
        name: 'Next',
        description: 'Learn auth'
    },
    {
        id: 3,
        name: 'Node',
        description: 'Learn http'
    },
    {
        id: 4,
        name: 'PHP',
        description: 'Learn loops'
    }, {
        id: 5,
        name: 'Git',
        description: 'Learn branches'
    }, ]);
    const [clone, setClone] = useState([...arr]);
    const colors = ['#18AFFE', '#F56E1D', '#4300FF', '#F700FE', '#05FF79'];
    const [filter, setFilter] = useState('');
    return (
        <div className='main'>
            <Add list={{ arr, setArr, clone, setClone, filter, setFilter }}></Add>
            <Task list={{ colors, arr, setArr, clone, setClone, filter, setFilter }}></Task>
        </div>
    );
}
export default App;