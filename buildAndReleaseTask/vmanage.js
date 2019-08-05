const fs = require("fs");
const uuid = require("uuid");
const taskJSON = require("./task.json");

taskJSON.id = uuid();
taskJSON.version.Patch = taskJSON.version.Patch + 1;
const version = `v${taskJSON.version.Major}.${taskJSON.version.Minor}.${
  taskJSON.version.Patch
}`;
taskJSON.instanceNameFormat = `Wiki upload ${version}`;
fs.writeFileSync("./task.json", JSON.stringify(taskJSON, null, 2));
