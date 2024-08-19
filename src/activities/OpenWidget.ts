import type { IActivityHandler } from "@vertigis/workflow";
import { appActions, getAppStore } from "jimu-core";

/** An interface that defines the inputs of the activity. */
interface OpenWidgetInputs {
    /**
     * @displayName Input 1
     * @description The first input to the activity.
     * @required
     */
    widgetId: string;
}

/**
 * @displayName Open Widget
 * @category Custom Activities
 * @description test jimu import
 */
export default class OpenWidgetActivity implements IActivityHandler {
    /** Perform the execution logic of the activity. */
    async execute(inputs: OpenWidgetInputs): Promise<void> {
        const openAction = appActions.openWidget(inputs.widgetId)
        await getAppStore().dispatch(openAction)
    }
}
