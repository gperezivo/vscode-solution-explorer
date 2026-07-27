import * as config from "@extensions/config";
import { TerminalCommand } from "@extensions/defaultTerminalCommands";
import { buildCustomCommandArguments } from "@extensions/customCommandBuilder";
import { TerminalAction } from "./TerminalAction";

export type CustomTerminalOptions = {
    name: TerminalCommand;
    parameters: { [id: string]: string };
    workingFolder: string;
};

export abstract class CustomTerminalAction extends TerminalAction {
    constructor(options: CustomTerminalOptions) {
        super(CustomTerminalAction.getCustomArguments(options.name, options.parameters), options.workingFolder);
    }

    protected static getCustomArguments(name: TerminalCommand, parameters: { [id: string]: string; }): string[] {
        return buildCustomCommandArguments(config.getCustomCommands(name), parameters);
    }
}
