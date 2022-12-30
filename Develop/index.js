const generator = require('./src/page-template.js');

const team = []; //Use this as a collection to hold generated team objects

//generator.doHTML(team);
generator.getManagerInfo(team)
    .then(generator.getOtherTeamMembers(team))
    .then(console.log(team));
