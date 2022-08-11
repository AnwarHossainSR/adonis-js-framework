import Route from '@ioc:Adonis/Core/Route';

Route.get('/', 'TodosController.index');
Route.post('/', 'TodosController.store');
Route.get('/:id', 'TodosController.show');
Route.put('/:id', 'TodosController.update');
Route.delete('/:id', 'TodosController.destroy');
