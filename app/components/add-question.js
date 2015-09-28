import Ember from 'ember';

export default Ember.Component.extend({
  addForm: false,

  actions: {
    showAddAQuestion() {
      this.set('addForm', true);
    },
    save() {
      var params={
        author: this.get('author'),
        question: this.get('question'),
        additionalNotes: this.get('additionalNotes'),
        answers: this.get('answers')
      };
      this.set('addForm', false);
      this.sendAction('save', params);
    }
  }
});
