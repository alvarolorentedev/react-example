# React Example

This is a small example of a react app that integrates `react`, `redux`, `redux-saga` and `reselect`

# Quick Start

- Prerequisites: `node` and `yarn`.
- Run:
```sh
git clone https://github.com/kanekotic/react-example
cd react-example
yarn install
yarn start
```

# Core Concepts

## Redux

[Github](https://github.com/reduxjs/redux)

Redux is an open-source JavaScript library for managing application state. 

The pattern that follows is the purposed by the [flux patter](https://facebook.github.io/flux/). The base idea of this pattern is to have unidirectional events to be able to have a predictable state after each event on a single source of true (the store).

![image](https://cdn-images-1.medium.com/max/1600/0*95tBOgxEPQAVq9YO.png)

The concepts that can be seen in the diagrams are:
- View: Is the visual part of the application that is shown to the user
- Actions: is the event caused by a users with the data involving the interaction
- Reducers: portion of the code that listents to the actions and calculates the new state of the application.
- Store: Single source of true for the application state.


## Redux-saga

[Github](https://github.com/redux-saga/redux-saga)

Is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

```js
import { put, takeEvery } from 'redux-saga/effects'

function* incrementTwice(action) {
    yield put({type: "INCREMENT"});
 }

function* sagaProvider() {
  yield takeEvery("INCREMENT_EVENT", incrementTwice);
}

export default sagaProvider;
```

## Reselect

A selector library.
- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors.

```js
import { createSelector } from 'reselect'

export const counter = state => state.counter

export const counterSquare = createSelector(
    counter,
    value => value * value
)
```
