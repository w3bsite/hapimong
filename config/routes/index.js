const fs = require('fs');

// we are loading files to add to a route array using concat()
let routes = [];

fs.readdirSync(__dirname)
  .filter(file => file != 'index.js')
  .forEach(file => {
    routes = routes.concat(require(`./${file}`))
  });

module.exports = routes;