//= require filter

// When the button is clicked
// Grab the divs on the page

describe('filter', function () {
  it('can remove all old ideas', function () {
    var ideas = setUpIdeas();

    // Filter through the ideas
    // Hide all ideas that have the .old class

    assert.equal($(ideas).find('.idea').length, 3);
    assert.equal($(ideas).find('.old').length, 1);

    filterOld(ideas); // we're going to 'punt' the function out into something separate we can test

    //how do we make sure it is only showing 2 ideas?
    assert.equal($(ideas).find('.idea').length, 3);
    assert.equal($(ideas).find('.hidden').length, 1);
  });
});

function setUpIdeas(){
  //we can put this setup in a helper method/file
  var ideas = document.createElement('div');
  ideas.className = 'ideas';
  var idea1 = document.createElement('div');
  idea1.className = 'idea';
  ideas.appendChild(idea1);
  var idea2 = document.createElement('div');
  idea2.className = 'idea';
  ideas.appendChild(idea2);
  var idea3 = document.createElement('div');
  idea3.className = 'idea old';
  ideas.appendChild(idea3);
  return ideas;
}
