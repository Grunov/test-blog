export default {
    namespaced: true,
    state: () => ({
        posts: JSON.parse(localStorage.getItem('posts')) || []
    }),
    mutations: {
        _addPost(state, payload) {
            state.posts.unshift(payload);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },
        _updatePost(state, payload) {
            let post = state.posts.find(post => post.id === payload.id);
            post = payload;
            console.log(post);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },
        _deletePost(state, postId) {
            state.posts = state.posts.filter(post => post.id !== postId);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        }
    },
    actions: {
        addPost({commit}, data) {
            commit('_addPost', data);
        },
        updatePost({commit}, post) {
            commit('_updatePost', post);
        },
        deletePost({commit, dispatch}, postId) {
            commit('_deletePost', postId);
            dispatch('commentsModule/deleteCommentsByPostId', postId, {root:true});
        }
    },
    getters: {
        posts: (state) => state.posts,
        post: (state) => (id) => state.posts ? state.posts.find(post => post.id === id) : null
    }
}