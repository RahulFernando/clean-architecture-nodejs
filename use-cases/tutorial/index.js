import { tutorialRepository } from "../../data-access/index.js";
import getByIdFactory from "./get-by-id.js";
import createNewFactory from "./create-new.js";

const getById = getByIdFactory(tutorialRepository);
const createNew = createNewFactory(tutorialRepository);

export { getById, createNew };
