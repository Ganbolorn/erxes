const { tableSchema } = require('../tablePrefix');

cube(`TicketsDepartments`, {
  sql: `SELECT * FROM ${tableSchema()}.\`tickets_departmentIds\``,

  joins: {
    Departments: {
      sql: `CONCAT(${CUBE}.departmentIds)= ${Departments}._id`,
      relationship: `belongsTo`
    }
  },

  measures: {},

  dimensions: {
    _id: {
      sql: `CONCAT(${CUBE}._id)`,
      type: `string`,
      primaryKey: true
    },

    departmentIds: {
      sql: `${Departments}.\`title\``,
      type: `string`,
      title: 'Title'
    }
  },

  dataSource: `default`
});
