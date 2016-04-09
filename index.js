'use strict';
const angular = require('angular');
const serverPath = require('./config.js').serverPath;

angular.module('TreeApp', [])
  .controller('SpeciessController', ['$http', function($http) {
    this.plz = 'plz respond';

    this.resource = 'speciess'
    this.path = `${serverPath}/${this.resource}`;
    this.speciess = [];

    this.read = function() {
      $http.get(this.path)
        .then(res => this.speciess = res.data)
        .catch(err => console.log(err));
    };

    this.create = function(species) {
      $http.post(this.path, species)
        .then(res => this.speciess.push(res.data))
        .catch(err => console.log(err));
    };

    this.delete = function(species) {
      $http.delete(this.path+'/'+species._id)
        .then(res => this.speciess.splice(this.speciess.indexOf(species), 1))
        .catch(err => console.log(err));
    };


  }])
