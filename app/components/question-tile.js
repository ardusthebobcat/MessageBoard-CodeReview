import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      if(confirm("Warning: Deleting is permanent. Are you sure you want to delete this?")) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
