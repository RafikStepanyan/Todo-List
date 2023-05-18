import { useRef } from 'react';

function Add({ list }) {
    const inp1 = useRef(null);
    const inp2 = useRef(null);
    const select = useRef(null);
    const save = () => {
        if (inp1.current.value === '' || inp2.current.value === '') {
            alert('empty input');
            return;
        }
        list.arr.push({
            id: Date.now(),
            name: inp1.current.value,
            description: inp2.current.value,
            done: false
        });
        inp1.current.value = '';
        inp2.current.value = '';
        list.setArr([...list.arr]);
        list.setClone([...list.arr]);
        if (list.filter === 'todo')
            list.setClone([...list.arr]);
        else if (list.filter === 'done')
            list.setClone([...list.arr.filter(e => e.done === true)]);
    };
    return (
        <div className='add'>
            <h1>TODO List</h1>
            <select ref={select} onChange={() => {
                if (select.current.value === 'todo') {
                    list.setFilter('tode');
                    list.setClone([...list.arr]);
                }
                else if (select.current.value === 'done') {
                    list.setFilter('done');
                    list.setClone([...list.arr.filter(e => e.done === true)]);
                }
            }}>
                <option value="todo">To Do</option>
                <option value="done">Done</option>
            </select>
            <input ref={inp1} type="text" placeholder='name...' />
            <input ref={inp2} type="text" placeholder='description...' />
            <button onClick={() => save()}>Add Todo</button>
        </div>
    );
};

export default Add;