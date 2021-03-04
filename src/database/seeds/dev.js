exports.seed = async function (knex) {
    // Deletes ALL existing entries
    // await knex.raw('TRUNCATE TABLE user CASCADE')

    // insert data
    await knex('user').insert([
        {
            id: 1,
            name: 'Swapnil'
        },
        {
            id: 2,
            name: 'Bokya'
        },
        {
            id: 3,
            name: 'Mau'
        }
    ]);
};
