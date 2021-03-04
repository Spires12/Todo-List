
class ToDoService {
  constructor(toDoModels) {
    this.toDoModels = toDoModels;
  }

  create(title) {
    if (title === '') {
      throw new Error("Error xereca")
    }
    return this.toDoModels.create(title)
  }
}

module.exports = ToDoService