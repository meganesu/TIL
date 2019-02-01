# Presentational vs. Container Components

When working on a React project, you can split up your components into **presentational** and **container** components.

## Presentational Components

These components should only handle how things _look_. They're all about rendering.

Presentational components...

* Receive data and callbacks exclusively through props. This makes them more reusable!
* Say what kinds of data they expect to receive via PropTypes.
* Have no dependencies on the rest of the app.
* Are stateless (unless they need UI state).
* Are written as functional components (unless they need state or lifecycle hooks).

They do NOT have logic about how things work.

## Container Components

These components should handle the logic about how things _work_.

Container components...

* Handle fetching and/or transforming data.
* Pass data to a presentational component (or another container component) via props.
* Can be stateful, since they are often a data source for other components.

## What's the point?

Separating your app into presentational and container components forces you to separate concerns in your app, which also makes your components more reusable.

## Additional Resources

* [Presentational and Container Components. Dan Abramov, Medium.](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)