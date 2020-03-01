import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
  subreddits: [],
};

const actions = {
  init: firestoreAction(function(context) {
    context.bindFirestoreRef('subreddits', db.collection('subreddits'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
}
