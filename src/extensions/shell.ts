export type ShellValueKind = "argument" | "path";

export function validateTerminalValue(value: string, valueKind: ShellValueKind): void {
    // Block line/control-character injection while preserving valid filesystem characters.
    if (/[\u0000\r\n]/.test(value)) {
        throw new Error(`Unsafe terminal ${valueKind}: contains control characters`);
    }
}

export function escapeTemplateValue(arg: string, platform: NodeJS.Platform = process.platform): string {
    // Placeholders in default templates are already wrapped in quotes.
    // Escape only characters that could terminate/alter the quoted argument.
    if (platform === "win32") {
        return arg
            .replace(/\u0000/g, "")
            .replace(/[\r\n]/g, "")
            .replace(/"/g, '""');
    }

    return arg
        .replace(/\u0000/g, "")
        .replace(/[\r\n]/g, "")
        .replace(/\\/g, "\\\\")
        .replace(/"/g, "\\\"")
        .replace(/\$/g, "\\$")
        .replace(/`/g, "\\`");
}

export function quoteForShell(value: string, platform: NodeJS.Platform = process.platform): string {
    if (platform === "win32") {
        return `"${value.replace(/"/g, '""')}"`;
    }

    return `'${value.replace(/'/g, `'\\''`)}'`;
}
