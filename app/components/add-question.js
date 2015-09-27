import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionForm: false,

  actions: {
    showAddQuestionForm() {
      this.set('addQuestionForm', true);
    },

    save() {
      var params={
        question: this.get('question'),
        author: this.get('author'),
        additionalNotes: this.get('additionalNotes'),
      };
      this.set('addQuestionForm', false),
      this.sendAction('save', params)
    }

  },
});
