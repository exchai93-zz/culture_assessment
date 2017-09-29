# Culture Assessment App

## Requirements

1. The assessment consists of 30 questions in total.
2. Each question should give the user the option to choose between two dimensions.
3. Dimension should be matched exactly two times. For example, the user must choose
between options related to Adaptability and Collaboration twice.
4. Each time a user chooses an answer, his score for the corresponding dimension is
incremented by 1.
5. The result of the assessment is represented by the amount of times each dimension was
chosen. Here is a JSON representation:

```
		dimensions:	{
				Adaptive:	4,
				Integrity:	7,
				Collaborative:	5,
				Result:	3,
				Customer:	4,
				Detail:	5
		}
```    

## Installation

**Make sure you have [Node](https://nodejs.org/en/) installed**

**Clone this repository**
```
$ git clone https://github.com/exchai93/culture_assessment.git
$ cd culture_assessment
```

**Install dependencies**
```
$ npm install
```

**Run application **
```
$
```

**To run tests**
```
$ npm test
```

## My approach

This is by no means a finish product. I decided to tackle this project by implementing a simple front-end solution with

**To refactor:**
- To render all the questions to the DOM at the the end rather than intermittently throughout my code.

**Testing:** I decided to use Mocha testing framework and Chai assertion library for expectations. This allowed me to make simple unit tests for front end

## Future improvements

- I wanted to focus on making a single page front-end application however due to time constraints.
- Use an API for the heavy business logic - using tool such as json-server. With the dimensions.json file I would be able to make RESTFUL routes.
- Progressive web app

- Start entirely again and work on an MVC server side project using Rails. I would generate a questions controller that would have RESTFUL routes i.e. `question/dimension` `question/:id`. To create the questions I would create a seed database with the dimension . Enabling user sign up / log in would be straight forward, using `omniauth`.

## Technologies
- Javascript
- Mocha and Chai for testing

## User Stories MVP
```
As a user
So that I can complete the assessment
I want to answer 30 questions in total
```
```
As a user
So that I can answer a question
I want to be presented with two statements from differing dimensions to choose from
```
```
As a user
So that I can finish the assessment
I want to be able to click a 'submit' button
```
```
As a user
So that I can view my score after finishing the assessment
I want to see the dimensions with their numerical value.
```

## User Stories - Nice to have
```
As a user
So that I can keep track of my score
I want to be able to sign up and log in
```
```
As a user
So that I am not overloaded with questions
I want one question to appear on a page
```
```
As a user
So that I can move onto the next question
I want to click 'next question'
```
```
As a user
So that I can
```
