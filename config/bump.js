// ./config/bump.js
module.exports = bump;
function bump (grunt) {
  var objectInterface = {
    options: {
      files              : ['package.json', 'bower.json', 'project.json'],
      updateConfigs      : [],
      commit             : true,
      commitMessage      : 'Release v%VERSION%',
      commitFiles        : ['package.json'],
      createTag          : true,
      tagName            : 'v%VERSION%',
      tagMessage         : 'Version %VERSION%',
      push               : true,
      pushTo             : 'upstream',
      gitDescribeOptions : '--tags --always --abbrev=1 --dirty=-d',
      globalReplace      : false,
      prereleaseName     : false,
      metadata           : '',
      regExp             : false
    }
  };
}
