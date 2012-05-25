
Base.navController.set('pageStates', Ember.StateManager.create({
  rootElement: '#content',
  initialState: 'page1',
  wantsHistory: true,

  page1: Ember.ViewState.create({
    route: 'page1',
    view: Base.Page1
  }),

  page2: Ember.ViewState.create({
    route: 'page2',
    view: Base.Page2
  }),

  page3: Ember.ViewState.create({
    route: 'page3',
    view: Base.Page3
  })
}));

Base.navController.set('pages', [
  {title: 'Page1', value: 'page1'},
  {title: 'Page2', value: 'page2'},
  {title: 'Page3', value: 'page3'}
]);
