rm miguel-savignano.wiki-upload-0.0.*
(cd buildAndReleaseTask && npm ci)
(cd buildAndReleaseTask && npm run build:ts)
(cd buildAndReleaseTask && NODE_ENV=production npm ci)
(cd buildAndReleaseTask && node vmanage.js)
node vmanage.js ./vss-extension.json
tfx extension create --manifest-globs vss-extension.json
tfx extension publish -t $VS_TOKEN --vsix miguel-savignano.wiki-upload-0.0.*.vsix
