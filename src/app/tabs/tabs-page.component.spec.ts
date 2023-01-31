import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from '@ionic/angular';

import { TabsPageComponent } from './tabs-page.component';

describe('TabsPageComponent', () => {
  let component: TabsPageComponent;
  let fixture: ComponentFixture<TabsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPageComponent ],
      imports: [RouterTestingModule, IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
