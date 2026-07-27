import { escapeTemplateValue } from "./shell";

export function buildCustomCommandArguments(
    commandTemplate: string[],
    parameters: { [id: string]: string },
    platform: NodeJS.Platform = process.platform
): string[] {
    const replacements = Object.keys(parameters).map(key => ({ search: "$" + key, value: parameters[key] }));

    // Optional parameters (empty string) drop their preceding -flag token entirely.
    const emptySearches = replacements.filter(r => r.value === "").map(r => r.search);
    const args: string[] = [];
    commandTemplate.forEach(arg => {
        if (emptySearches.some(search => arg.includes(search))) {
            if (args.length > 0 && args[args.length - 1].startsWith("-")) {
                args.pop();
            }
            return;
        }
        args.push(arg);
    });

    for (let i = 0; i < args.length; i++) {
        replacements.forEach(replacement => {
            args[i] = args[i].replace(replacement.search, escapeTemplateValue(replacement.value, platform));
        });
    }

    return args;
}
