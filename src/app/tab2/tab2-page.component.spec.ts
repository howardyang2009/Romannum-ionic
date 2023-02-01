import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {PhotoService} from '../services/photo.service';
import { Tab2PageComponent } from './tab2-page.component';

describe('Tab2PageComponent', () => {
  let component: Tab2PageComponent;
  let fixture: ComponentFixture<Tab2PageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2PageComponent ],
      imports: [IonicModule.forRoot()],
      providers: [PhotoService]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
