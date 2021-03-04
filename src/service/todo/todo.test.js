const assert = require('assert');
const { expect } = require('chai')

const ToDoModel = require('./../../model/todo')
const ToDoService = require('./todo')

const toDoSpy = new ToDoService(new ToDoModel())

describe('ToDo Service', function () {
  describe('create function', function () {
    //it('return error title', function (done) {
    //  assert.throws(toDoSpy.create, Error)
    //  done()
    //})

    it('test if save database', function () {
      const title = 'estudar js'
      const expectObj = {"id": 1, title}
      const result = toDoSpy.create(title)
      
      expect(expectObj).to.deep.equal(result)

    })
  })
})


