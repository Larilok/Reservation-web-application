module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5432',
    database: 'auth',
    user: 'postgres',
    password: '6545352'
  },
  migrations: {
    directory: __dirname + 'db/migrations/auth',
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