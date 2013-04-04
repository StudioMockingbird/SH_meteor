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
