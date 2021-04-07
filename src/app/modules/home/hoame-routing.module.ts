import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
export const homeRoutes: Routes = [
    // {path: 'landing', component:  PaymentConditionsLandingComponent}
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
