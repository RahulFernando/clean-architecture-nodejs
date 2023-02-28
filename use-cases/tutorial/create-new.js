const createNew = (repository) => async (payload) => {
  if (payload == null) return;

  return await repository.insert(payload);
};

export default createNew;
