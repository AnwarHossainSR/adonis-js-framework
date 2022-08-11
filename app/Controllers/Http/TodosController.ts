import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import Todo from 'App/Models/Todo';

export default class TodosController {
  public async index() {
    return Todo.all();
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['title', 'description', 'completed']);
    const todo = await Todo.create(data);
    return response.created({ message: 'created!', todo });
  }

  public async show({ params, response }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id);
    return response.status(200).json(todo);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id);
    todo.title = request.input('title');
    todo.description = request.input('description');
    todo.completed = request.input('completed');
    await todo.save();
    return response.status(204).json(todo);
  }

  public async destroy({ params, response }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id);
    await todo.delete();
    return response.status(202).noContent();
  }
}
