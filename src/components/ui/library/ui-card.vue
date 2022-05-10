<script>
export default {
    name: 'ui-card',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
    },
    render(createElement) {
        return createElement(
            this.tag,  
            { class: 'ui-card' },
            this.$slots.default 
        );
    }
}
</script>

<style lang="scss" scoped>
    .ui-card {
        width: 100%;
        box-shadow: 0 0 .5rem #3f51b575;
        border-radius: .25rem;
        padding: 1rem;
    }
</style>