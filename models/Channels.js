const { Model } = require('objection');
const knex = require('./../db/knex');
const moment = require('moment')

Model.knex(knex)

class ChannelsModel extends Model {
  static get tableName() {
    return 'channels';
  }

  static get idColumn() {
    return 'id';
  }


  $beforeInsert () {
    this.created_at = moment.utc().unix()
    this.updated_at = moment.utc().unix()
  }
  
  $beforeUpdate () {
    this.updated_at = moment.utc().unix();
  }
}

module.exports = ChannelsModel;
