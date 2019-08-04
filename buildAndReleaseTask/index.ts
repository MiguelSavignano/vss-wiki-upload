import * as tl from "azure-pipelines-task-lib/task";

async function run() {
  try {
    const filePath = tl.getInput("filePath", true);
    const wikiId = tl.getInput("wikiId", true);
    const apiToken = tl.getInput("apiToken", true);
    console.log(getOrganizationName(), getProjectId());
    // console.log(JSON.stringify(tl.getVariables(), null, 2));
    console.log(`[inputs] ${filePath} ${wikiId} ${apiToken}`);
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

export const getOrganizationName = () => {
  const varaible = tl.getVariable("system.teamFoundationCollectionUri");
  return varaible.split("/")[3] || "";
};

export const getProjectId = () => {
  return tl.getVariable("system.teamFoundationCollectionUri");
};

run();
