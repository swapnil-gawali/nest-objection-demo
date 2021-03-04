// eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
exports.up = function (knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id');
        table.string('name');
        table.timestamps(true, true);
    })
};

// eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user');
};
