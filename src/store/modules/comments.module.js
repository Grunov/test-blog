export default {
    namespaced: true,
    state: () => ({
        comments: JSON.parse(localStorage.getItem('comments')) || []
    }),
    mutations: {
        _addComment(state, payload) {
            state.comments.unshift(payload);
            localStorage.setItem('comments', JSON.stringify(state.comments));
        },
        _deleteComment(state, commentId) {
            state.comments = state.comments.filter(comment => comment.id !== commentId);
            localStorage.setItem('comments', JSON.stringify(state.comments));
        }
    },
    actions: {
        addComment({commit}, data) {
            commit('_addComment', data);
        },
        deleteComment({commit}, commetId) {
            commit('_deleteComment', commetId);
        }
    },
    getters: {
        commentsByPostId: 
        (state) => 
            (postId) => 
                state.comments.filter(comment => comment.postId === postId),
        commentsCountByPostId: 
        (state) => 
            (postId) => 
            state.comments.filter(comment => comment.postId === postId).length
    }
}