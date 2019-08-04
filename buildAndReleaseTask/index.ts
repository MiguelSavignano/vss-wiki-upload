import * as tl from "azure-pipelines-task-lib/task";

async function run() {
  try {
    const tslintResultFilePath = tl.getInput("filePath", true);
    console.log(`[input] filePath ${tslintResultFilePath}`);
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();
