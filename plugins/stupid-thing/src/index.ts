import { logger, ui, utils } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Hello world!");
        logger.log(ui.assets.all);
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}
