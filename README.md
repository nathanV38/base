base
====

A base repository for Rails 3.2+, Devise, ember.js, and twitter bootstrap, based projects.

Purpose
=======
This project provides a base project from which projects can be started.  It incorporates a Rails 3 server, twitter bootstrap
styling, and ember.js front end usage.  It includes the Devise security framework for the server, and then wraps that in
ember.js views to keep everything on one page.

This app also serves as an example of some ember techniques to work with a Rails server while keeping the UI front end centric.

Setup
=====
Clone the repository into a directory, use Rails S to start a server, and go to http://localhost:3000 to view the base pages.

The app has several dummy pages to show navigation that can be replaced with real content, it has the typical Devise user sign
up, sign in, and forgotten password features in the right side of the nav bar.  Sign up and sign in using facebook is supported.

Remaining
=========
Routing is still quite new in ember.js so that still needs to be added.

When a link is followed into the system it needs to be setup to view the content using the ember.js navigation rather than expecting
the server to generate the pages.

Walkthrough
===========
To get started reading the project here is a basic outline of the code features.

1) It uses ember-bootstrap which provides some bootstrap friendly wrappers on ember controls and creates the correct classes to
match bootstrap styling.

2) Devise provides controllers and authentication of users.  While Devise expects to be presenting multiple pages for user input,
this example uses its own forms and submits them over ajax using ember and jQuery with JSON result types.  Fortunately Devise
supports JSON for many request types.  For facebook sign in this currently does page loads, but may be modified to use an iFrame
if there is time.

3) This project has 3 main state machines (used to control what UI is presented to the user (rather than manually
swapping elements): a) The primary page content, b) the sign in/sign up menus vs. the user account
menu c) the sign in or lost password form.  Ember uses state machines to record application state, for routing, and for
view swapping.  When a state machine changes state the views associated with the states are swapped automatically.  In the
case of the main page content, this will be connected with routing to allow links to page content, while the other two state
machines will not need this support as they reflect the session state not appropriate for navigation.
