import * as path from "@extensions/path"
import {
  Action,
  CreateDirectoryPackages,
  SlnAddSolutionFile,
  SlnCreateSolutionFolder,
  SlnxAddSolutionFile,
  SlnxCreateSolutionFolder,
} from "@actions";
import {
  SingleItemActionsCommand,
} from "@commands";
import { SolutionFolder, SolutionType } from "@core/Solutions";
import { DIRECTORY_PACKAGES_FILE_NAME } from "@core/DirectoryPackages";
import { SolutionTreeItem } from "@tree/items/SolutionTreeItem";

export class CreateDirectoryPackagesCommand extends SingleItemActionsCommand {
  constructor() {
    super("Create Directory.Packages.props");
  }

  public shouldRun(item: SolutionTreeItem | undefined): boolean {
    return !!item && !!item.workspaceRoot;
  }

  public async getActions(item: SolutionTreeItem | undefined): Promise<Action[]> {
    if (
      !item ||
      !item.solution ||
      (item.solution.type !== SolutionType.Sln && item.solution.type !== SolutionType.Slnx) ||
      !item.solution.fullPath
    ) {
      return [];
    }

    let actions = [];
    const isSln = item.solution.type === SolutionType.Sln;
    const parentFolder = item.solutionItem instanceof SolutionFolder ? item.solutionItem : undefined;

    let solutionItemsFolder = item.solution
      .getFolders()
      .find((f) => f.name === "Solution items");

    if (!solutionItemsFolder) {      
      solutionItemsFolder = new SolutionFolder("");
      solutionItemsFolder.name = "Solution items";
      if (isSln) {
        const createFolder = new SlnCreateSolutionFolder(
          item.solution,
          "Solution items",
          item.solutionItem
        );
        actions.push(createFolder);
      } else {
        actions.push(
          new SlnxCreateSolutionFolder(
            item.solution,
            "Solution items",
            parentFolder
          )
        );
      }
    }

    actions.push(new CreateDirectoryPackages(item.solution));
    actions.push(
      isSln
        ? new SlnAddSolutionFile(item.solution, solutionItemsFolder, path.join(item.solution.folderPath, DIRECTORY_PACKAGES_FILE_NAME))
        : new SlnxAddSolutionFile(item.solution, solutionItemsFolder, path.join(item.solution.folderPath, DIRECTORY_PACKAGES_FILE_NAME))
    );

    return actions;
  }
}
