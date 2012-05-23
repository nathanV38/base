Base.NavController = Ember.Object.extend({
  pages: [],
  selection: "page1",
  pageStates: null,
  navView: Bootstrap.NavList.create({
    itemTitleKey: 'title',
    itemValueKey: 'value',
    contentBinding: "Base.navController.pages",
    selectionBinding: "Base.navController.selection"
  })
});

Base.set('navController', Base.NavController.create() );

Base.get('navController').addObserver('selection', function() {
  Base.navController.get('pageStates').goToState(Base.navController.get('selection'));
});
