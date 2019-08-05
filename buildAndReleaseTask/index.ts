import * as tl from "azure-pipelines-task-lib/task";
import { WikiUploadFileService } from "vsts-wiki-upload";

async function run() {
  try {
    const filePath = tl.getInput("filePath", true);
    const apiToken = tl.getVariable("system.accessToken");
    const organizationName = getOrganizationName(
      tl.getVariable("system.teamFoundationCollectionUri")
    );
    const projectName = tl.getVariable("system.teamProject");

    console.log(`[NODE_VERSION] ${process.version}`);
    console.log(JSON.stringify(tl.getVariables(), null, 2));
    console.log(
      `[inputs] ${filePath} ${apiToken} ${organizationName} ${projectName}`
    );

    new WikiUploadFileService({
      organizationName,
      projectName,
      apiToken,
      filePath
    }).run();
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

export const getOrganizationName = (url: string) => url.split("/")[3] || "";

run();
