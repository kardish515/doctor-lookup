import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {ApiCall} from './api.js';

$(document).ready(function(){
  let apiCall = new ApiCall();

  let displayData = function(results){
    let body=JSON.parse(results);
    $('#doctor-list').empty();
    for(let key in body.data) {
      $('#doctor-list').append('<li>' + body.data[key].profile.first_name + ' ' + body.data[key].profile.last_name + '</li>');
    }
  }

  $('#doctor').submit(function(event) {
    event.preventDefault();
    let userInput = $('#user-input').val();
    apiCall.getData(userInput, displayData);
  });
});
