import {QuickStartComponent} from './quickstart.component';
import {TestBed, async, ComponentFixture, inject} from '@angular/core/testing';
import {TestQuickStartService} from './test.quickstart-service'

let fixture: ComponentFixture<QuickStartComponent>;
let comp: QuickStartComponent;
let testQuickStartService;


describe('TestBed test cases', () => {
  /*used to initialize, declare */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuickStartComponent
      ],
      providers: [{
       provide: TestQuickStartService
      }]
    });
    fixture = TestBed.createComponent(QuickStartComponent);
    comp = fixture.componentInstance;
    testQuickStartService = new TestQuickStartService();
  });
  afterEach(() => {
    comp.totalV = 0;
  });
  it('set and get the service name', async(() =>{
    testQuickStartService.name = 'Angular'
    expect(testQuickStartService.name).toBe('Angular');
  }));

  it('up the vote of a component', async(() => {
    comp.upVote();
    expect(comp.totalV).toBe(1);
  }));

  it('down the vote of a component', async(() => {
    comp.downVote();
    expect(comp.totalV).toBe(-1);
  }));

  it('Is the value of component is zero', async(() => {
    expect(comp.totalV).toBe(0);
    }));


})

