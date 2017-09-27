(function(){
  'use strict';

  // Dimension categories
  var categories = ["Adaptive", "Integrity", "Collaborative", "Result", "Customer", "Detail"];
  // Dimension categories with corresponding statements
  var dimensions = {
      "Adaptive": [
                  "I am innovative",
                  "I take risks",
                  "I am willing to experiment",
                  "I am fast moving",
                  "I am quick to take advantage of opportunities",
                  "I don't like to be constrained by rules",
                  "I am flexible",
                  "I adjust easily to changing environments",
                  "I welcome change",
                  "I am a curious person"
                ],
      "Integrity" : [
                  "I have a high sense of integrity",
                  "I have high ethical standards",
                  "I am honest",
                  "I respect individuals",
                  "I am fair",
                  "I am trustworthy",
                  "I always tell the truth",
                  "I lead by example",
                  "I am not easily offended",
                  "I always try to do the right thing"
                ],
      "Collaborative" : [
                  "I am team oriented",
                  "I am cooperative",
                  "I am supportive",
                  "I work in collaboration with others",
                  "I avoid conflicts",
                  "I am always happy to share knowledge",
                  "I am a good communicator",
                  "I share responsibilities",
                  "I like working together with others",
                  "I am always available to help out a colleague in need"
                ],
      "Result" : [
                "I am results oriented",
                "I have high expectations for performance",
                "I am achievement oriented",
                "I reach my goals",
                "I am ambitious",
                "I can sometimes be aggresive",
                "I set clear goals",
                "I am good at identifying effective processes",
                "I am action oriented",
                "I focus on the outcome, rather than the process"
              ],
    "Customer" : [
                "I am customer oriented",
                "I listen to customers",
                "I watch the markets carefully",
                "I value our clients",
                "I respond promptly to clients",
                "I always put customer needs first",
                "I work to satisfy our customers",
                "I put the customer's requirements ahead of anything else",
                "I highly value customer feedback",
                "I base my decisions on what our customers need & want"
              ],
    "Detail" : [
                "I pay attention to detail",
                "I put emphasis on quality",
                "I am precise",
                "I focus on rules",
                "I am careful",
                "I see patterns in data",
                "I am analytical ",
                "I am good at understanding cause-and-effect relationships",
                "I am accurate in my work",
                "I notice mistakes quickly"
              ],
    };

    var display = [];
    var numberOfQuestions = 30;

    // Method to shuffle elements in an array
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      // Whilst there are elements to shuffle
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    // Method to retrieve random dimension categories
    function getTwoDimensions() {
      // Shuffle the dimension categories and return a new array from index 0 to 2
      return shuffle(categories).slice(0,2);
    }

    // Build one question which has two options
    function buildQuestion(questionNumber) {
      // Iterate through each category element
      getTwoDimensions().forEach(function(category) {
        // Statements of the selected dimension category
        var statements = dimensions[category];
        // Shuffle the array of statements and return the last element
        var randomStatement = shuffle(statements).pop();
        // Find the index of the selected dimension category
        var categoryToDelete = categories.indexOf(category);
        // If the number of statements of the selected dimension category is null
        if(!dimensions[category].length) {
          // Delete the one dimension category from the categories array
          categories.splice(categoryToDelete, 1);
        }
      });
    }

    // Build 30 questions
    function buildAllQuestions() {
      for (var i = 1; i < numberOfQuestions + 1 ; i++) {
        buildQuestion(i);
      }
    }

    function calculateScore() {
      var adaptiveScore = document.querySelectorAll("[data-dimension='Adaptive']:checked").length;
      var integrityScore = document.querySelectorAll("[data-dimension='Integrity']:checked").length;
      var collaborativeScore = document.querySelectorAll("[data-dimension='Collaborative']:checked").length;
      var resultScore = document.querySelectorAll("[data-dimension='Result']:checked").length;
      var customerScore = document.querySelectorAll("[data-dimension='Customer']:checked").length;
      var detailScore = document.querySelectorAll("[data-dimension='Detail']:checked").length;
    }


})();
