<script>
export default {
    name: 'ui-button',
    functional: true,
    props: {
        tag: {
            type: String,
            default: 'button',
        },
        to: {
            type: [String, Object],
            default: null
        }
    },
    render(createElement, {props, listeners, children, data}) {

        if(props.to) {
            props.tag = 'router-link';
        }
        
        let classes = 'ui-button';
        if(data.staticClass) {
            classes = `${data.staticClass} ${classes}`;
        }

        return createElement(
            props.tag ,  
            { 
                class: classes,
                attrs: {
                    ...data.attrs,
                    to: props.to
                },
                on: {
                    click: () => {
                        if(listeners.click) listeners.click();
                    }
                }
            },
            children
        );
    }
}
</script>

<style lang="scss" scoped>
    .ui-button {
        display: inline-flex;
        background-color: #3f51b5;
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: .25rem;
        cursor: pointer;
        text-decoration: none;
        outline: none;

        &:hover,
        &:focus {
            box-shadow: 0 0 5px #3f51b5;
        }

        &:active {
            background-color: #3f51b575;
            box-shadow: none;
        }
    }
</style>