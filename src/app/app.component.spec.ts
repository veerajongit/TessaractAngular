import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));
  it('Should recognize VEERAJ from Image', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.recognizeImage('/assets/s.png').then(
      output => {
        expect(output).toContain('Veeraj');
      },
      operror => {
        console.log(operror);
      }
    );
  }));
});
