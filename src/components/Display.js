

const Display = (props) => {
    const { taskArr, index, handleCheckTask, handleDeleteTask } = props;
    return (
        <div>
            {taskArr.map((task, index) => (
                <div key={index}>
                    { task.complete === false ? <p>{ task.task }</p> : <p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{task.task}</p>}
                    <input type='checkbox' onClick={() => handleCheckTask(index)}/>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Display;