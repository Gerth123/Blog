import { Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home/home.component';
import { ImprintComponent } from './shared/components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { MicroTemplateComponent } from './blogs/micros/micro-template/micro-template.component';
import { MacroTemplateComponent } from './blogs/macros/macro-template/macro-template.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },                
      { path: 'micros/:id', component: MicroTemplateComponent }, 
      { path: 'macros/:id', component: MacroTemplateComponent }, 
      { path: 'imprint', component: ImprintComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];
