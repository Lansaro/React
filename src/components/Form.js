const Form = (props) => {
    const { task, setTask, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'></label>
            <input type='text' id='task' value={task} onChange={(e) => setTask(e.target.value)}/>
            <button>Add</button>
        </form>
    )
};

export default Form;