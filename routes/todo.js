import express from 'express'
import TodoController from '../controllers/todos'

const router = express.Router()

router
	.route('/')
	.get(TodoController.getAllTodos)
	.post(TodoController.createTodo)

router
	.route('/:id')
	.get(TodoController.getTodo)
	.put(TodoController.updateTodo)
	.delete(TodoController.deleteTodo)

export default router
