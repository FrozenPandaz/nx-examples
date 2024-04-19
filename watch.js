const { Watcher } = require('nx/src/native');

let t = new Watcher(
  __dirname,
  [],
  true
);

t.watch((err, event) => {

  console.log(event.length + ' Events');

  console.log(event.filter(e => /^app\d\//.test(e.path)).length + ' / 20');
  console.log(event.filter(e => /^app\d-e2e\//.test(e.path)).length + ' / 9');

  console.log(event);
});

process.on('SIGINT', () => {});
process.on('SIGTERM', () => {});
