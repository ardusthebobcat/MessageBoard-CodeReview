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
      };
      this.set('addForm', false);
      this.sendAction('save', params);
    }
  }
});
