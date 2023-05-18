function Task({ list }) {
    let index = 0;
    return (
        <div className='task'>
            {
                list.clone.map(e => {
                    if (index >= list.colors.length)
                        index = 0;
                    return <div key={e.id} style={{ background: list.colors[index++] }}>
                        <div className='hover' style={{ textDecoration: e.done ? '3px line-through #7C21FC' : '', cursor: 'context-menu' }} onClick={() => {
                            e.done = !e.done;
                            list.setArr([...list.arr]);
                            list.setClone([...list.arr]);
                            if (list.filter === 'todo')
                                list.setClone([...list.arr]);
                            else if (list.filter === 'done')
                                list.setClone([...list.arr.filter(e => e.done === true)]);
                        }}>{e.name}</div>
                        <div style={{ textDecoration: e.done ? '3px line-through #7C21FC' : '' }}>{e.description}</div>
                        <div><button onClick={() => {
                            list.arr = list.arr.filter(elm => elm.id !== e.id);
                            list.setArr([...list.arr]);
                            list.setClone([...list.arr]);
                            if (list.filter === 'todo')
                                list.setClone([...list.arr]);
                            else if (list.filter === 'done')
                                list.setClone([...list.arr.filter(e => e.done === true)]);
                        }}>&times;</button></div>
                    </div>;
                })
            }
        </div>
    );
}

export default Task;