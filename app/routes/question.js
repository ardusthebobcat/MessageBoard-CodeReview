import Ember from 'ember';

export default Ember.Route.extend({
  model(params)  {
    return Ember.RSVP.hash({
      question: this.store.find('question', params.question_id),
      answers: this.store.findAll('answer', params.question_id)
    });
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
    saveAnswer(question, params) {
      var newAnswer= this.store.createRecord('answer', params);
      var question = question;
      question.get('questions').addObject(newAnswer);
      newAnswer.save().then(function() {
        return answer.save();
      });
      this.transitionTo('question', question)

    }
  }
});
