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
Clone the repository into a directory, use rvm to isolate the environment and bundle install, then use rails s to start
a server, and go to http://localhost:3000 to view the base pages.

The app has several dummy pages to show navigation that can be replaced with real content, it has the typical Devise user sign
up, sign in, and forgotten password features in the right side of the nav bar.  Sign up and sign in using facebook is supported.

Tests for the project are written in Cucumber.  Invoke using 'cucumber features/*.feature' or 'rake cucumber'.  The tests expect
environment variables facebook_user and facebook_pass to be defined and set to valid facebook credentials to test the facebook
integration.

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

Rails
-----
The rails side of thing serves 3 functions: 1) provide the initial HTML structure, 2) serve assets, 3) provide JSON API
access to the server functions, including security through the Devise controllers.  The asset pipeline is used to serve
json, css, and images as usual.  The ember-rails gem is used to compile handlebar templates into javascript, and serve up
the ember.js files.  In development as is often the case the files are served individually rather than being compiled on
the server.

Ember
-----
Once the initial html is loaded the javascript takes over and uses Ember to render most of the UI and to update it as data
changes.

Bootstrap
---------
Twitter bootstrap is used for styling and some js functions for drop down menus.  This is served on the rails side
from the twitter-bootstrap-rails gem.

Ember-bootstrap
---------------
This ember add-on provides bootstrap friendly views to apply the proper classes and to provide structure to match bootstrap
expectations.

base
----
The project's custom content is under app/assets/javascript/ember, and app/assets/javascript/application.js.erb.  References
to app/assets/javascript will be ommited in the remainder of this section and only the rest of the path referenced.

application.js.erb: This file includes the other js files, sets path variables that use rails helpers, and performs
initialization based on the DOM ready event from jQuery.

ember/controllers: This app uses several farily fine-grained controllers.  One for navigation, one for the user
signed in/out state, and one for each Devise form that can be presented to the user.  Each form controller holds the user
input from the form and provides actions to submit the data.  In the case of the sign in and password controllers there
are actions to swap the view using the contentStates state machine.

models: So far there is only one model for users which is not yet in use.

state_machines: These files hold the state machines used by the UI to track what should be presented to the user.  There are
three as mentioned previously: navigation, user state, and content state (for the sign in/password reset forms).  These
state machines have Ember.ViewState states that control the swapping of views.  In the case of hte content state a simple
{{#if}} is used based on the current state of the state machine.  This was done both as an example of an alternate way
to use state machines, and because nested state machines were not behaving as desired at the time of this writing.

templates: These files hold handlebar templates for views in the application.  Some content comes from templates internal
to some of the bootstrap views, but forms in particular and the alternate content for the user states are represented as
templates.  Some of the page content currently comes from the rails layout, but will be migrated to ember at some time.

views: There are 2 files for the sets of views required.  The page views are all small and intended to be replaced with real
content.  The user views are all just wrappers on the respective templates so they too are too small to warrant separate
files.

base.js: Following ember convention this file creates the application namespace and is required prior to other files so the
namespace exists when they are processed.
