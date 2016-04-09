'use strict';
const angular = require('angular');
const serverPath = require('./config.js').serverPath;

angular.module('TreeApp', [])
  .controller('SpeciessController', ['$http', function($http) {
    this.plz = 'plz respond';

    this.speciess = [];

    this.getSpeciess = function() {
      $http.get(serverPath+'/speciess')
        .then(res => this.speciess = res.data)
        .catch(err => console.log(err));
    }


  }])
