function createURL (hash) {

    return `${hash}?_wx_tpl=${hash}`
}
function baseUrl() {
    let bundleUrl = weex.config.bundleUrl
    const url = bundleUrl.substring(0,bundleUrl.lastIndexOf("/dist/")+1)
    return url +"dist/";
}
export default {
    createURL,baseUrl
}