# vscode-solution-explorer

This extension adds a Visual Studio Solution File explorer panel in Visual Studio Code. Now you can navigate into your solution following the original Visual Studio structure.

## Getting Started

To activate `vscode-solution-explorer` you must first open a folder or workspace.

Then, you can find this extension displayed as
- a tab in the "Explorer" activity
![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/main/images/vscode-solution-explorer-tab.png)
- an activity with the Visual Studio icon
![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/main/images/vscode-solution-explorer-activity.png)

You can configure it in the Visual Studio Code settings panel:

![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/main/images/vscode-solution-explorer-show-mode.png)

## Open Solutions



## Features

Adds a Solution Explorer panel where you can find a Visual Studio Solution File Explorer.

- Can load any .sln version

- Supports csproj, vcxproj, fsproj and vbproj (from vs2017 and before)

- Supports dotnet core projects

- You can create, delete, rename or move project folders and files.

- You can create, delete, rename or move solution, solution folders and projects.

- You can add or remove packages and references when the project is of kind CPS (dotnet core).

- You can update all packages when the project is of kind CPS (dotnet core).

![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/main/images/vscode-solution-explorer-1.gif)

![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/main/images/vscode-solution-explorer-2.gif)

![Solution Explorer](https://github.com/fernandoescolar/vscode-solution-explorer/raw/main/images/vscode-solution-explorer-3.gif)

## Requirements

You have to open a folder with at least one solution file (".sln") in the root path.

Or you can create a new one by clicking with the right mouse button.

## License

The source code is licensed under the [MIT](LICENSE) license.

The icons from ([vscode-icons extension](https://github.com/vscode-icons/vscode-icons/)) are licensed under the [Creative Commons - ShareAlike (CC BY-SA)](https://creativecommons.org/licenses/by-sa/4.0/) license.

Branded icons are licensed under their copyright license.

## Extension Settings

- `vssolution.showMode` Show the solution explorer in the "activityBar", in the "explorer" pane or "none" to hide it. This feature is only for testing pourposes.

- `vssolution.solutionExplorerIcons` "solution-explorer": custom items from vscode-solution-explorer extension. "mix": file and folder icons from the installed icons theme. "current-theme": all the icons are from the installed icons theme.

- `vssolution.showOutputChannel` Show the solution explorer output channel.

- `vssolution.trackActiveItem` Select the active editor file in the solution explorer (not recomended).

- `vssolution.itemNesting` Sets whether related items will be displayed nested.

- `vssolution.netcoreIgnore` Folder and file names to ignore when get a dotnet core project content.

- `vssolution.xxprojItemTypes` Type of XML element to put in the xxproj files.

- `vssolution.xmlspaces` Spaces to be used for indenting XML output. It could be a number or an string. ex. "2", " " or "t".

- `vssolution.altSolutionFolders` If there is no solution in the workplace root folder, it will search for solutions in any of these folders.

- `vssolution.win32Encoding` Win32 "codepage" to "iconv.js" encoding equivalences.

- `vssolution.openSolutions.inRootFolder` Sets whether solutions will be automatically loaded from the root folder.

- `vssolution.openSolutions.inAltFolders` Sets whether solutions will be automatically loaded from the `vssolution.altSolutionFolders` parameter.

- `vssolution.openSolutions.inFoldersAndSubfolders` Sets whether solutions will be automatically loaded from the current opened folder and subfolders.

- `vssolution.openSolutions.selectedInOmnisharp` Sets whether solutions will be automatically loaded from the current selected solution in Omnisharp extension.

###### Example

```javascript
{
    "vssolution.showMode": "activityBar",

    "vssolution.solutionExplorerIcons": "current-theme",

    "vssolution.showOutputChannel": true,

    "vssolution.trackActiveItem": false,

    "vssolution.itemNesting": false,

    "vssolution.netcoreIgnore": [
        "bin",
        "node_modules",
        "obj",
        ".ds_store"
    ],

    "vssolution.xxprojItemTypes": {
        "*": "Content",
        "cs": "Compile",
        "cpp": "ClCompile",
        "cc": "ClCompile",
        "c": "ClCompile",
        "h": "ClInclude",
        "hpp": "ClInclude",
        "vb": "Compile",
        "fs": "Compile",
        "ts": "TypeScriptCompile"
    },

    "vssolution.xmlspaces": "2",

    "vssolution.altSolutionFolders": [
        "src"
    ],

    "vssolution.win32Encoding": {
        "932": "Shift_JIS",
        "936": "GBK",
        "950": "BIG5"
    },

    "vssolution.openSolutions.inRootFolder": false,
    "vssolution.openSolutions.inAltFolders": false,
    "vssolution.openSolutions.inFoldersAndSubfolders": false,
    "vssolution.openSolutions.selectedInOmnisharp": true
}
```

## Known Issues

Please report your issues: [vscode-solution-explorer GitHub page](https://github.com/fernandoescolar/vscode-solution-explorer/issues)

## Release Notes

There is a lot of work to do.

### 0.5.0

Adding open solution command

Adding different automatic open solution flags: in root folder, in alt folders, in root folders and subfolders (Enhancement #204), and omnisharp integration

Adding command to update package references versions automatically

Bugfix #205: README images fixed thanks to [Philippe Desmarais](https://github.com/CephalonAhmes)

Adding welcome view when no solution found

### 0.4.7

Enhancement #63: prefix commands with "SolutionExplorer: "

Enhancement #167: using runtime icons for tree actions

Enhancement #189: it tries to determine the file extension when you create a new one without extension

Enhancement #159: added new command: "SolutionExplorer: Select Active Document"

### 0.4.6

Bugfix #178: Nested items PR #197 (by @callummarshall9). You can activate this option by setting the `vssolution.itemNesting` parameter to `true`

Enhancement #171: load new project templates from `dotnet new --list` command output.

Fixing Dependabot alerts

Move branch from master to main.

## Thanks to contributors

[dfrencham](https://github.com/dfrencham)
[darkmfj](https://github.com/darkmfj)
[mwpenny](https://github.com/mwpenny)
[remcoros](https://github.com/remcoros)
[marawan31](https://github.com/marawan31)
[emrahcetiner](https://github.com/emrahcetiner)
[martinothamar](https://github.com/martinothamar)
[jesperbjensen](https://github.com/jesperbjensen)
[Dvvarf](https://github.com/Dvvarf)
[vthg2themax](https://github.com/vthg2themax)
[jloureiro09](https://github.com/jloureiro09)
[jbactad](https://github.com/jbactad)
[vlesierse](https://github.com/vlesierse)
[m4ss1m0g](https://github.com/m4ss1m0g)
[Coda](https://github.com/little512)
[Hongyang Du (hond)](https://github.com/Danieladu)
[Callum Marshall](https://github.com/callummarshall9)
[Philippe Desmarais](https://github.com/CephalonAhmes)

**Enjoy!**
