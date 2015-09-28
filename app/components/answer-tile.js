import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addAnswer', true);
    },
    addAnAnswer(question) {
      var params={
        author: this.get('author'),
        answer: this.get('answer'),
      };
      this.set('addAnswer', false);
      this.sendAction('addAnAnswer', question, params);
    }
  }
});
