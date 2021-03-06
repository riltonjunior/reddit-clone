import { firestoreAction } from 'vuexfire';
import firebase from '@/firebase';
import db from '@/db';

const posts = db.collection('posts');

const state = {
  subreddits: [],
  posts: [],
};

const getters = {
  subreddit: (state) => state.subreddits[0] ? state.subreddits[0] : {},
};

const actions = {
  async createPost({ getters }, post) {
    const result = posts.doc();
    post.id = result.id;
    post.subreddit_id = getters.subreddit.id;
    post.user_id = firebase.auth().currentUser.uid;
    post.created_at = firebase.firestore.FieldValue.serverTimestamp();
    post.updated_at = firebase.firestore.FieldValue.serverTimestamp();
    try {
      const created = await posts.doc(post.id).set(post);
      console.log(created);
    } catch (error) {
      console.error(error);
    }
  },
  async deletePost(_, post_id) {
    await posts.doc(post_id).delete();
  },
  initSubreddit: firestoreAction(function(context, name) {
    context.bindFirestoreRef('subreddits', db.collection('subreddits').where('name', '==', name));
  }),
  initPosts: firestoreAction(function(context, subreddit_id) {
    context.bindFirestoreRef('posts', posts.where('subreddit_id', '==', subreddit_id));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters
}
