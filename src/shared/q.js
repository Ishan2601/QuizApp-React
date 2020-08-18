export const QUESTIONS = 
[
    {
        id: 0,
        testId: 0,
        difficulty: 5,
        question: "How can you increase the CPU resources for your Lambda?",
        image:'',
        options:["Increase the configured CPU value","Increase the configured timeout value","Increase the configured memory value","Increase the configured concurrency value"],                
        answer: "Increase the configured memory value"
    },
    {
        id: 1,
        testId: 0,
        difficulty: 4,
        question: "How can additional code or content can be provided for Lambda?",
        image:'',
        options:["blocks","layers","aliases","handlers"],
        answer: "layers"
    },
    {
        id: 2,
        testId: 0,
        difficulty: 3,
        question: "How can Step Functions call Lambdas?",
        image:'',
        options:["in sequence","both of these answers","neither of these answers","in parallel"],
        answer: "both of these answers"
    },
    {
        id: 3,
        testId: 0,
        difficulty: 4,
        question: "Ultimate, Reaching for the stars!",
        image:'',
        options:["","","",""]
    },
    {
        id: 4,
        testId: 0,
        difficulty: 2,
        question: "It's your birthday, we're gonna party!",
        image:'',
        options:["","","",""]
    },
    {
        id: 5,
        testId: 1,
        difficulty: 5,
        question: "How can you check your current git version?",
        image:'',
        options:["git --a","git --version","git --option","git --current"],
        answer: "git --version"
    },
    {
        id: 6,
        testId: 1,
        difficulty: 4,
        question: "What command lets you create a connection between a local and remote repository?",
        image:'',
        options:["git remote add new","git remote add origin","git remote new origin","git remote origin"],
        answer:"git remote add origin"
    },
    {
        id: 7,
        testId: 1,
        difficulty: 3,
        question: "What option can you use to apply git configurations across your entire git environment?",
        image:'',
        options:["--all","--master","--global","--update"],
        answer:"--global"
    },
    {
        id: 8,
        testId: 1,
        difficulty: 4,
        question: "Ultimate, Reaching for the stars!",
        image:'',
        options:[]
    },
    {
        id: 9,
        testId: 1,
        difficulty: 2,
        question: "It's your birthday, we're gonna party!",
        image:'',
        options:[]
    },
    {
        id: 10,
        testId: 2,
        difficulty: 5,
        question: "What data structure does a binary tree degenerate to if it isn't balanced properly?",
        image:'',
        options:["linked list","queue","set","OrderedDict"],
        answer:"linked list"
    },
    {
        id: 11,
        testId: 2,
        difficulty: 4,
        question: "What is a static method?",
        image:'',
        options:["Static methods are called static because they always return 'None'.",
        "Static methods can be bound to either a class or an instance of a class.",
        "They serve mostly as utility methods or helper methods, since they can't access or modify a class's state.",
        "Static methods can access and modify the state of a class or an instance of a class."],
        answer:"They serve mostly as utility methods or helper methods, since they can't access or modify a class's state."
    },
    {
        id: 12,
        testId: 2,
        difficulty: 3,
        question: "What are attributes?",
        image:'',
        options:[
            "Attributes are long-form version of an 'if/else' statement, used when testing for equality between objects.",
            "Attributes are a way to hold data or describe a state for a class or an instance of a class.",
            "Attributes are strings that describe characteristics of a class.",
            "Function arguments are called 'attributes' in the context of class methods and instance methods."
        ],
        answer:"Function arguments are called 'attributes' in the context of class methods and instance methods."
    },
    {
        id: 13,
        testId: 2,
        difficulty: 4,
        question: "Ultimate, Reaching for the stars!",
        image:'',
        options:[]
    },
    {
        id: 14,
        testId: 2,
        difficulty: 2,
        question: "It's your birthday, we're gonna party!",
        image:'',
        options:[]
    },
    {
        id: 15,
        testId: 3,
        difficulty: 5,
        question: "If you want to import just the Component from the React library, what syntax do you use?",
        image:'',
        options:["import React.Component from 'react'",
        "import [ Component ] from 'react'",
        "import Component from 'react'",
        "import { Component } from 'react'"],
        answer:"import { Component } from 'react'"
    },
    {
        id: 16,
        testId: 3,
        difficulty: 4,
        question: "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        image:'',
        options:["Wrap it in the React.memo higher-order component.",
        "Implement the useReducer Hook.",
        "Implement the useMemo Hook.",
        "Implement the shouldComponentUpdate lifecycle method."],
        answer:"Wrap it in the React.memo higher-order component."
    },
    {
        id: 17,
        testId: 3,
        difficulty: 3,
        question: "What is the testing library most often associated with React?",
        image:'',
        options:["Mocha","Chai","Sinon","Jest"],
        answer:"Jest"
    },
    {
        id: 18,
        testId: 3,
        difficulty: 4,
        question: "Ultimate, Reaching for the stars!",
        image:'',
        options:["","","",""]
    },
    {
        id: 19,
        testId: 3,
        difficulty: 2,
        question: "It's your birthday, we're gonna party!",
        image:'',
        options:["","","",""]
    }
]