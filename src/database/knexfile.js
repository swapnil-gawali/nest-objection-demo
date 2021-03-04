// Update with your config settings.
const { knexSnakeCaseMappers } = require('objection')
module.exports = {
        client: 'postgresql',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'swapnil',
          database: 'test'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seed'
        },
        ...knexSnakeCaseMappers()
};
