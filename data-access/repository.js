import _ from "lodash";

const repository = (Model) => {
  async function findOne(_filter, _options = {}) {
    const { populate, sort } = _options;

    const query = Model.findOne(_filter);

    if (sort) query.sort(sort);

    _.forEach(populate || [], (p) => query.populate(p));

    return await query.lean().exec();
  }

  async function find(_filter, _options = {}) {
    const { populate } = _options;

    const query = Model.find(_filter);

    _.forEach(populate || [], (p) => query.populate(p));

    return await query.lean().exec();
  }

  async function insert(_tutorial) {
    return await Model.create(_tutorial);
  }

  return Object.freeze({
    findOne,
    find,
    insert,
  });
};

export default repository;
