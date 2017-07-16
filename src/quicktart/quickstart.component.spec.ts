import {QuickStartComponent} from './quickstart.component';
import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';
import {QuickStartService} from './quickstart-service'

let fixture: ComponentFixture<QuickStartComponent>;
let comp: QuickStartComponent;

describe('TestBed test cases', () => {
  /*used to intialize, declare */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuickStartComponent
      ],
      providers: [{
       provide: QuickStartService
      }]
    });
    fixture = TestBed.createComponent(QuickStartComponent);
    comp = fixture.componentInstance;
  });
  afterEach(() => {
    comp.totalV = 0;
  });
  it('up the vote of a component', async(() => {
    comp.upVote();
    expect(comp.totalV).toBe(1);
  }));

  it('down the vote of a component', async(() => {
    comp.downVote();
    expect(comp.totalV).toBe(-1);
  }));

  it('call the service and set message', async(() => {
    inject([QuickStartService], (quickstartService) => {
      quickstartService.setNameIs('Mr. R');
      /*expect(quickstartService.nameIs).toContain('Z');*/
      expect(quickstartService._nameIs).toBe('');
    })
  }));

})

