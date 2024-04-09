import './App.css'

export default () => {

  const imageUrl = 'https://picsum.photos/200/300';
  //você pode alterar as dimensões conforme o necessário

  return(
    <div className="app">
        <div className="todo-list">
            <h1>Lista de Tarefas</h1>
            <div className="todo-item">
              <p>Tarefa 1</p>
            </div>
            <div className="todo-item">
              <p>Tarefa 1</p>
            </div>
            <div className="todo-item">
              <p>Tarefa 1</p>
            </div>
            <img src={imageUrl} alt="" className="todo-img"/>
        </div>
    </div>
  )
}