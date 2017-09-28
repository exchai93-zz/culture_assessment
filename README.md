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

Question: Pick the option that describes you best


SIX DIMENSIONS:
1. Adaptive
2. Integrity
3. Collaborative
4. Result
5. Customer
6. Detail

choice: {statement "_____", dimension: 'collaborative'}

## Installation

**Clone this repository**
```
$ git clone https://github.com/exchai93/culture_assessment.git
$ cd culture_assessment
```




## My approach

I decided to tackle this project using a front-end implemented solution

**Testing:** I decided to use Mocha testing framework and Chai for expectations. This allowed me to make unit tests simple to

## User Stories MVP
```
As a user
So that I can complete the assessment
I want to answer 30 questions in total
```
```
As a user
So that I can answer a question
I want to be presented with two statements from differing dimension to choose from
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
So that I can think about
I want each question to appear on a different page
```
```
As a user
So that I can take this 
```

## Future improvements

- There is currently not much of a UI
