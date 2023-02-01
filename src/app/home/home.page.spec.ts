import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RomannumCalc1Service } from '../services/romannum.calc.1.service';
import { RomannumCalc2Service } from '../services/romannum.calc.2.service';
import { RomannumCalc3Service } from '../services/romannum.calc.3.service';
import { RomannumCalcExService } from '../services/romannum.calc.ex.service';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [RomannumCalc1Service, RomannumCalc2Service, RomannumCalc3Service, RomannumCalcExService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
