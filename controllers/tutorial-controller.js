import { getById, createNew } from "../use-cases/tutorial/index.js";

export const fetchById = async (req, res) => {
  const { id } = req.params;

  const result = await getById({ _id: id });

  if (result !== null) return res.status(200).json(result);

  return res.status(404);
};

export const create = async (req, res) => {
  const { body } = req;

  const result = await createNew(body);

  if (result) return res.status(201).json(result);

  return res.status(500);
};
