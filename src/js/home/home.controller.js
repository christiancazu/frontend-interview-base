class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;

    // append chart-component custom element
    const head = document.getElementsByTagName('head')[0];

    const script = document.createElement('script');

    script.src = AppConstants.webComponentURL;

    head.insertBefore(script, head.firstChild);
  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }


}

export default HomeCtrl;
