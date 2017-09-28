(function(){
  'use strict';
  // 6 dimension catories
  var categories = ["Adaptive", "Integrity", "Collaborative", "Result", "Customer", "Detail"];
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

  function buildAssessment() {}
    var output = [];
    var numberOfQuestions = 30;

    // Randomly shuffle elements in an array
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    function getTwoDimensions() {
      return shuffle(categories).slice(0,2);
    }

    function buildQuestion(questionNumber){
      getTwoDimensions().forEach(function(category) {
        var statements = dimensions[category];
        var randomStatement = shuffle(statements).pop();
        var categoryToDelete = categories.indexOf(category);
        if (!dimensions[category].length) {
          categories.splice(categoryToDelete, 1);
        }
        document.getElementById("quiz").innerHTML += `<label><input type="radio" name='${questionNumber}' value='${category}' data-dimension='${category}'>` + category + ": " + randomStatement + "</label>";
      });
    }

    for (var i = 1; i < numberOfQuestions + 1 ; i++) {
      buildQuestion(i);
      document.getElementById("quiz").innerHTML += "<h2>Question:</h2>" + i + "<hr>";
    }

    

    document.getElementByClass('assessmentContainer').innerHTML += output.join('');

})();
