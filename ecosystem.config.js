module.exports = {
    apps: [{
        name: 'kurlyfries.com',
        script: 'npm',
        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        args: 'run production',
        instances: 1,
        autorestart: true,
        watch: false,
        //max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production'
        },
    }],
};