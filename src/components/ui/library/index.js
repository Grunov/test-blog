const requireComponent = require.context('.', false, /\.vue$/);
const components = []

requireComponent.keys().forEach(fileName => {
    if (fileName === './index.js') return;
    components.push(requireComponent(fileName).default);
});

export default components;