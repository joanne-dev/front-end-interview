import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WirelessLandingComponent} from './components/wireless-landing/wireless-landing.component';
import {FeaturesComponent} from './components/wireless-info/features/features.component';
import {OverviewComponent} from './components/wireless-info/overview/overview.component';
import {WhatsInComponent} from './components/wireless-info/whats-in/whats-in.component';
export const homeRoutes: Routes = [
    {path: 'landing', component:  WirelessLandingComponent, children: [
            {path: 'features', component:  FeaturesComponent},
            {path: 'overview', component:  OverviewComponent},
            {path: 'whats-in', component:  WhatsInComponent}
            ]},
];

@NgModule({
    exports: [
        RouterModule
    ],
    declarations: [],
    imports: [
        RouterModule.forRoot(homeRoutes)
    ]
})

export class HomeRoutingModule {
}
