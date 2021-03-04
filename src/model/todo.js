
class ToDoModel {
 constructor() {
  this.toDo = []
 }
  create(title) {
   const obj =  {"id": 1, title}
   this.toDo.push(obj) 
   return obj
  }
}

module.exports = ToDoModel