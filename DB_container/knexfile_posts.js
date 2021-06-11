module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5432',
    database: 'posts',
    user: 'postgres',
    password: '6545352'
  },
  migrations: {
    directory: __dirname + 'db/migrations/posts',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: __dirname + '/DB_container/db/seeds'
  },
  pool: {
    min: 1,
    max: 2
  }
}