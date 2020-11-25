import React, {useState} from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import EditModal from './components/EditModal/EditModal'

function App() {
  let [contact, setContact] = useState([])
  let [modal, setModal] = useState(false)
  let [editContact, setEditContact] = useState([])

  function handleTask(contact1){
    let newContact = [...contact]
    newContact.push(contact1)
    setContact(newContact)
  }

  function changeStatus(id){
    let newContact = contact.map(item =>{
      if(item.id === id){
        item.status =! item.status
      }
      return item
    })
    setContact(newContact)
  }

  function handleDelete(id){
    let newContact = contact.filter(item =>{
      return item.id !== id
    })
    setContact(newContact)
  }

  function handleEdit(index){
    setModal(true)
    setEditContact(contact[index])
  }

  function handleSaveContact(newContact1){
    let newContact = contact.map(item =>{
      if(item.id === newContact1.id){
        return newContact1
      }
      return item
    })
    setContact(newContact)
    handleCloseModal()
  }

  function handleCloseModal(){
    setModal(false)
  }

  return (
    <div className="App">
      <AddTodo
        handleTask = {handleTask}
      />
      <TodoList
        contact = {contact}
        changeStatus = {changeStatus}
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
      />
      {modal ? <EditModal
      editContact = {editContact}
      handleSaveContact = {handleSaveContact}
      handleCloseModal = {handleCloseModal}
      />:null}
     
    </div>
  );
}

export default App;