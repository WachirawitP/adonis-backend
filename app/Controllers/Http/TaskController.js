'use strict'

const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthService = use('App/Services/AuthorizationService')

class TaskController {
  async index({ auth, request, params}) {
    const user = await auth.getUser()
    const {id} = params
    const project = await Project.find(id)
    AuthService.verifyPermission(project, user)
    return await project.task().fetch()
  }

  async create({ auth, request, params}) {
    const user = await auth.getUser()
    const {description} = request.all();
    const {id} = params
    const project = await Project.find(id)
    AuthService.verifyPermission(project, user)
    const task = new Task()
    task.fill({
      description
    })
    await project.task().save(task)
    return task
  }
}

module.exports = TaskController
