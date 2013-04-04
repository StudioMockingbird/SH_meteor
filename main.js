if (Meteor.isClient) {
  Template.templBook.stories = function () {
    return Book.find({}, {sort: {score: -1, name: 1}});
  };
  
  Template.templStory.events({
    'click input.inc': function () {
      Book.update(this._id, {$inc: {score: 5}});
    },
    
    'click input.dec': function () {
      Book.update(this._id, {$inc: {score: -5}});
    }
  });
 
}

// Here we add our own code to insert a few stories in the db
Book = new Meteor.Collection("book");

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Book.find().count() === 0){
      _.each(myBook, function(page) {
      Book.insert(page);
      });
    }
        
    console.log(Book.findOne());
    });
}