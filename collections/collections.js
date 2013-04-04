// Here we add our own code to insert a few stories in the db
Book = new Meteor.Collection("book");

Meteor.startup(function () {
	if(Book.find().count() === 0){
	  _.each(myBook, function(page) {
	  Book.insert(page);
	  });
	}
		
	console.log(Book.findOne());
	});