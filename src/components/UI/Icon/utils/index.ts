export const getAssetsList = () => {
    const context = require.context('../iconsModule', false, /\.tsx$/)
    const result = []
    context.keys().forEach(r => result.push(r.match(/\.\/([a-zA-z-]+)\.tsx/)[1]))
    return result
}