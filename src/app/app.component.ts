declare var $: any; 

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  trainings: any = [];
  training: any = {};
  departments = ['web', 'mobility', 'testing'];
  searchKey: '';
  searchText;

  ngOnInit() {

  }
  addTraining() {
    let _index = this.trainings.findIndex(elem => elem.id === this.training.id);
    this.training.displaydate = this.formatDateTime(this.training.dateTime);
    if (_index == -1) {
      this.training.id = Math.floor(Math.random() * 100);
      this.trainings.push(JSON.parse(JSON.stringify(this.training)));
      if(!this.training['testFlag']) this.training = {};
    } else {
      this.trainings[_index] = JSON.parse(JSON.stringify(this.training));
    }
    if(!this.training['testFlag']) $('#addTraining').modal('hide');
  }
  deleteTrainig(_data) {
    let _index = this.trainings.findIndex(elem => elem.id === _data.id);
    this.trainings.splice(_index, 1);
  }
  editTraining(_data) {
    this.training = _data;
    this.training.dataTime = new Date(_data['dateTime']);
    $('#addTraining').modal('show');
  }
  formatDateTime(currentdate) {
    if(typeof(currentdate) === 'string') currentdate = new Date(currentdate);
    let dateTime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes();
    return dateTime;
  }
  search() {
    this.searchText = this.searchKey;
  }
}
