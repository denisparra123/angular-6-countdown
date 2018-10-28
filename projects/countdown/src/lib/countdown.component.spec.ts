import { TestBed, async } from '@angular/core/testing';

import { CountDownComponent } from './countdown.component';
import { NumberTransformPipe } from './pipes/number-transform/number-transform.pipe';

describe('CountDownComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CountDownComponent,
        NumberTransformPipe
      ]
    }).compileComponents();
  }));
  it('should create the lib', async(() => {
    const fixture = TestBed.createComponent(CountDownComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
