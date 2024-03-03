module.exports = {
  apps : [{
    name: 'genieweb',
    script: 'dist/apps/genie/main.js',
    exec_mode: 'cluster',
    instances: 0,
    watch: '.'
  }, {
    name: 'genieapi',
    script: 'dist/apps/api/main.js',
    exec_mode: 'cluster',
    instances: 0,
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
