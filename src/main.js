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
      $('#doctor-list').append('<li>' + body.data[key].practices[0].visit_address.street + '</li>');
      for (let i = 0; i < body.data[key].practices.length; i++) {
        if(body.data[key].practices[i].within_search_area === true){
          $('#doctor-list').append('<li>' + body.data[key].practices[i].visit_address.city + ', ' + body.data[key].practices[i].visit_address.state + ', ' + body.data[key].practices[i].visit_address.zip + '</li>');
          for (let j = 0; j < body.data[key].practices[i].phones.length; j++) {
            if(body.data[key].practices[i].phones[j].type === 'landline'){
              $('#doctor-list').append('<li>' + body.data[key].practices[i].phones[j].number + '</li>');
            }
          }
          if(body.data[key].practices[i].website !== undefined){
            $('#doctor-list').append('<li>' + body.data[key].practices[i].website + '</li>');
          } else {
            $('#doctor-list').append('<li>No website available</li>');
          }
          if(body.data[key].practices[i].accepts_new_patients === true){
            $('#doctor-list').append('<li>Currently accepting new patients</li>');
          } else{
            $('#doctor-list').append('<li>Not accepting new patients</li>');
          }
          break;
        }
      }
      $('#doctor-list').append('<li>----------------------------------------------</li>');
    }
  }

  $('#doctor').submit(function(event) {
    event.preventDefault();
    let userInput = $('#user-input').val();
    apiCall.getData(userInput, displayData);
  });
  $('#medical-issue').submit(function(event) {
    event.preventDefault();
    let userInput2 = $('#user-input2').val();
    apiCall.getData2(userInput2, displayData);
  });
});
