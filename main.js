if (Meteor.isClient) {
  Template.templBook.stories = function () {
    return Book.find({}, {sort: {score: -1, name: 1}});
  };
  
  Template.templNewStory.events = {
    'click input.addStory': function () {
      Book.insert({title: document.getElementById("title").value, 
                   text: document.getElementById("text").value, 
                   link: document.getElementById("link").value, 
                   datetime: new Date,
                   score: 5, 
                  });
    }
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