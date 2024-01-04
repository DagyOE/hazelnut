class ToDo {
  constructor({
    id,
    project,
    message,
    date,
    deadline,
    priority,
    status,
    assignedTo,
  }) {
    this.id = id;
    this.project = project;
    this.message = message;
    this.date = date;
    this.deadline = deadline;
    this.priority = priority;
    this.status = status;
    this.assignedTo = assignedTo;
  }
}

export default ToDo;
