import { Tutorial } from "../models/index.js";
import repository from "./repository.js";

const tutorialRepository = repository(Tutorial);

export { tutorialRepository };
