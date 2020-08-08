export const QUESTIONS = 
[
    {
        id: 0,
        testId: 0,
        difficulty: 5,
        question: "How can you increase the CPU resources for your Lambda?",
        options:{
                A:"Increase the configured CPU value",
                B:"Increase the configured timeout value",
                C:"Increase the configured memory value",
                D:"Increase the configured concurrency value"
            },
        answer: "Increase the configured memory value"
    },
    {
        id: 1,
        testId: 0,
        difficulty: 4,
        question: "How can additional code or content can be provided for Lambda?",
        options:{
            A:"blocks",
            B:"layers",
            C:"aliases",
            D:"handlers"
        },
        answer: "layers"
    },
    {
        id: 2,
        testId: 0,
        difficulty: 3,
        question: "How can Step Functions call Lambdas?",
        options:{
            A:"in sequence",
            B:"both of these answers",
            C:"neither of these answers",
            D:"in parallel"
        },
        answer: "both of these answers"
    },
    {
        id: 3,
        testId: 0,
        difficulty: 4,
        question: "Ultimate, Reaching for the stars!",
        options:{
            A:"",
            B:"",
            C:"",
            D:""
        }
    },
    {
        id: 4,
        testId: 0,
        difficulty: 2,
        question: "It's your birthday, we're gonna party!",
        options:{
            A:"",
            B:"",
            C:"",
            D:""
        }
    },
    {
        id: 5,
        testId: 1,
        difficulty: 5,
        question: "How can you check your current git version?",
        options:{
            A:"git --a",
            B:"git --version",
            C:"git --option",
            D:"git --current"
        },
        answer: "git --version"
    },
    {
        id: 6,
        testId: 1,
        difficulty: 4,
        question: "What command lets you create a connection between a local and remote repository?",
        options:{
            A:"git remote add new",
            B:"git remote add origin",
            C:"git remote new origin",
            D:"git remote origin"
        },
        answer:"git remote add origin"
    },
    {
        id: 7,
        testId: 1,
        difficulty: 3,
        question: "What option can you use to apply git configurations across your entire git environment?",
        options:{
            A:"--all",
            B:"--master",
            C:"--global",
            D:"--update"
        },
        answer:"--global"
    },
    {
        id: 8,
        testId: 1,
        difficulty: 4,
        question: "Ultimate, Reaching for the stars!",
        options:{
            A:"",
            B:"",
            C:"",
            D:""
        }
    },
    {
        id: 9,
        testId: 1,
        difficulty: 2,
        question: "It's your birthday, we're gonna party!",
        options:{
            A:"",
            B:"",
            C:"",
            D:""
        }
    },
    {
        id: 10,
        testId: 2,
        difficulty: 5,
        question: "What data structure does a binary tree degenerate to if it isn't balanced properly?",
        options:{
            A:"linked list",
            B:"queue",
            C:"set",
            D:"OrderedDict"
        },
        answer:"linked list"
    },
    {
        id: 11,
        testId: 2,
        difficulty: 4,
        question: "What is a static method?",
        options:{
            A:"Static methods are called static because they always return 'None'.",
            B:"Static methods can be bound to either a class or an instance of a class.",
            C:"They serve mostly as utility methods or helper methods, since they can't access or modify a class's state.",
            D:"Static methods can access and modify the state of a class or an instance of a class."
        },
        answer:"They serve mostly as utility methods or helper methods, since they can't access or modify a class's state."
    },
    {
        id: 12,
        testId: 2,
        difficulty: 3,
        question: "What are attributes?",
        options:{
            A:"Attributes are long-form version of an 'if/else' statement, used when testing for equality between objects.",
            B:"Attributes are a way to hold data or describe a state for a class or an instance of a class.",
            C:"Attributes are strings that describe characteristics of a class.",
            D:"Function arguments are called 'attributes' in the context of class methods and instance methods."
        },
        answer:"Function arguments are called 'attributes' in the context of class methods and instance methods."
    },
    {
        id: 13,
        testId: 2,
        difficulty: 4,
        question: "Ultimate, Reaching for the stars!",
        options:{
            A:"",
            B:"",
            C:"",
            D:""
        }
    },
    {
        id: 14,
        testId: 2,
        difficulty: 2,
        question: "It's your birthday, we're gonna party!",
        options:{
            A:"",
            B:"",
            C:"",
            D:""
        }
    },
    {
        id: 15,
        testId: 3,
        difficulty: 5,
        question: "If you want to import just the Component from the React library, what syntax do you use?",
        options:{
            A:"import React.Component from 'react'",
            B:"import [ Component ] from 'react'",
            C:"import Component from 'react'",
            D:"import { Component } from 'react'"
        },
        answer:"import { Component } from 'react'"
    },
    {
        id: 16,
        testId: 3,
        difficulty: 4,
        question: "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        options:{
            A:"Wrap it in the React.memo higher-order component.",
            B:"Implement the useReducer Hook.",
            C:"Implement the useMemo Hook.",
            D:"Implement the shouldComponentUpdate lifecycle method."
        },
        answer:"Wrap it in the React.memo higher-order component."
    },
    {
        id: 17,
        testId: 3,
        difficulty: 3,
        question: "What is the testing library most often associated with React?",
        options:{
            A:"Mocha",
            B:"Chai",
            C:"Sinon",
            D:"Jest"
        },
        answer:"Jest"
    },
    {
        id: 18,
        testId: 3,
        difficulty: 4,
        question: "Ultimate, Reaching for the stars!",
        options:{
            A:"",
            B:"",
            C:"",
            D:""
        }
    },
    {
        id: 19,
        testId: 3,
        difficulty: 2,
        question: "It's your birthday, we're gonna party!",
        options:{
            A:"",
            B:"",
            C:"",
            D:""
        }
    }
]