const getById = (repository) => async (payload) => {
  if (payload == null) return;

  return await repository.findOne(payload);
};

export default getById;
