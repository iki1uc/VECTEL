// RESPO.narrativ.js
import { VEKTEL } from "./VEKTEL.narrativ.js";

export const RESPO_NARR = {
  speak(event) {
    return VEKTEL.tell(event);
  }
};
