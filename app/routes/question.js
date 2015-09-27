import Ember from 'ember';

export default Ember.Route.extend({
  model(params)  {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    deleteQuestion(question) {
      if (confirm('Delete Question?')) {
        question.get('answers').then(function(answers) {
          answers.forEach(function(answer) {
            answer.destroyRecord();
          });
        });
        question.destroyRecord();
        this.transitionTo('index');
      }
    },
    edit(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    save(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      params.question.save();
      this.transitionTo('question');
    },
  }
});
