const width = weex.config.env.deviceWidth;
const height = weex.config.env.deviceHeight;
const platform = weex.config.env.platform.toLowerCase();
const appName = weex.config.env.appName;

const mixins = {
    methods: {

        getPageHeight () {
            if (platform === 'android') {
                return 750 / width * height;
            }
            return height;
        },

        getPosition () {

            const isProd = (platform === 'ios' && appName !== 'WeexDemo');
            return {
                top: isProd ? '-40px' : '0px',
                bottom: isProd ? '36px' : '0px',
            };
        },
    }
}

export default mixins;