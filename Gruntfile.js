module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    hexo: {
      clean: {
        options: {
            cliCmd: 'clean'
        }
      },
      generate: {
        options: {
            cliCmd: 'generate'
        }
      },
    },
    cloudfiles: {
      deploy: {
	'user': process.env.RACKSPACE_USER,
	'key': process.env.RACKSPACE_KEY,
	'region': process.env.RACKSPACE_REGION,
	'upload': [{
	  'container': process.env.RACKSPACE_CONTAINER,
	  'src': 'public/**/*',
	  'dest': '/',
	  'stripcomponents': 1,
	  'purge': {
	    'files': ['index.html']
	  }
	},
	{
          'container': process.env.RACKSPACE_CONTAINER,
          'src': 'themes/tranquilpeak/source/assets/**/*',
          'dest': '/',
          'stripcomponents': 3
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-hexo');
  grunt.loadNpmTasks('grunt-cloudfiles');

  grunt.registerTask('default', ['hexo:clean', 'hexo:generate']);
  grunt.registerTask('deploy', ['cloudfiles:deploy']);
};
