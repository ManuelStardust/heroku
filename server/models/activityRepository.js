// project_repository.js

class ActivityRepository {
  constructor(dao) {
    this.dao = dao
  }

  createTable() {
    const sql = 'CREATE TABLE IF NOT EXISTS Activities (id INTEGER PRIMARY KEY AUTOINCREMENT,type TEXT, activity TEXT, key TEXT,joke TEXT, joke_id INTEGER, date datetime)'
    return this.dao.run(sql)
  }

  create(data) {
    return this.dao.run(
      'INSERT INTO Activities (type, activity, key, joke, joke_id, date) VALUES (?,?,?,?,?,?)',
      [data.type, data.activity, data.key, data.joke, data.joke_id, data.date])
  }

  getAll() {
    return this.dao.all('SELECT * FROM Activities')
  }
}

module.exports = ActivityRepository;
