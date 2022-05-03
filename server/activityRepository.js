// project_repository.js

class ActivityRepository {
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = 'CREATE TABLE IF NOT EXISTS Activities (id INTEGER PRIMARY KEY AUTOINCREMENT,activity TEXT, joke TEXT, date datetime)'
    return this.dao.run(sql)
  }

  create(data) {
    return this.dao.run(
      'INSERT INTO Activities (activity, joke, date) VALUES (?,?,?)',
      [data.activity, data.joke, data.date])
  }

  getAll() {
    return this.dao.all('SELECT * FROM Activities')
  }
}

module.exports = ActivityRepository;
