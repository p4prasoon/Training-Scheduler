declare var $: any; 

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule
      ],
      declarations: [
        AppComponent,
        FilterPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should create the Training`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let trainig = {
      dateTime: new Date(),
      department: "mobility",
      description: "test training",
      displaydate: "2/9/2020 @ 3:28",
      duration: 1,
      meetingRoom: "Pluto123",
      name: "test",
      testFlag:"true"
    }
    app.training = trainig;
    app.addTraining();
    expect(app.trainings[0].name).toEqual('test');
  });
  it(`should update the Training`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let trainig = {
      dateTime: new Date(),
      department: "mobility",
      description: "test training",
      displaydate: "2/9/2020 @ 3:28",
      duration: 1,
      meetingRoom: "Pluto123",
      name: "test",
      testFlag:"true"
    }
    app.training = trainig;
    app.addTraining();
    trainig.name = "test123";
    trainig['id'] = app.trainings[0].id;
    app.training = trainig;
    app.addTraining();
    expect(app.trainings[0].name).toEqual('test123');
  });
  it(`should delete the Training`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let trainig = {
      dateTime: new Date(),
      department: "mobility",
      description: "test training",
      displaydate: "2/9/2020 @ 3:28",
      duration: 1,
      meetingRoom: "Pluto123",
      name: "test",
      testFlag:"true"
    }
    app.training = trainig;
    app.addTraining();
    app.deleteTrainig(app.trainings[0]);
    expect(app.trainings.length).toEqual(0);
  });
  
});



