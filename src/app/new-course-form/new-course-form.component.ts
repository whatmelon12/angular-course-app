import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{
  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      topics: fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
