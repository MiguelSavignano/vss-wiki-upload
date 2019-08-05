import * as tl from "azure-pipelines-task-lib/task";
import { WikiUploadFileService } from "vsts-wiki-upload";

async function run() {
  try {
    const filePath = tl.getInput("filePath", true);
    const wikiId = tl.getInput("wikiId", true);
    const apiToken = tl.getInput("apiToken", true);
    const organizationName = getOrganizationName();
    const projectName = getProjectId();

    console.log(`[NODE_VERSION] ${process.version}`);
    console.log(JSON.stringify(tl.getVariables(), null, 2));
    console.log(
      `[inputs] ${filePath} ${wikiId} ${apiToken} ${organizationName} ${projectName}`
    );

    new WikiUploadFileService({
      organizationName,
      projectName,
      wikiId,
      apiToken,
      filePath
    }).run();
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

export const getOrganizationName = () => {
  const varaible = tl.getVariable("system.teamFoundationCollectionUri");
  return varaible.split("/")[3] || "";
};

export const getProjectId = () => {
  return tl.getVariable("system.teamProject");
};

run();
