Twitter.PostsController = Ember.ArrayController.extend ({
  sortProperties: ['date_value'],
  sortAscending: false,
  actions: {
    save: function() {
      var newTweet = this.get('tweet');
      posts.addObject({
        id: (posts.length + 1).toString(),
        tweet: newTweet,
        date: new Date(),
        date_value: new Date().getTime(),
        comments: []
      });
        this.set("tweet", "");
    }
  }
});
