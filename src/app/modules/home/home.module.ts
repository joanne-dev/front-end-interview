import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WirelessLandingComponent } from './components/wireless-landing/wireless-landing.component';
import {HomeRoutingModule} from './hoame-routing.module';
import { WirelessInfoComponent } from './components/wireless-info/wireless-info.component';
import {WirelessPreviewComponent} from './components/wireless-preview/wireless-preview.component';
import {HeaderComponent} from './components/header/header.component';
import { IconsComponent } from './components/icons/icons.component';
import { OverviewComponent } from './components/wireless-info/overview/overview.component';
import { FeaturesComponent } from './components/wireless-info/features/features.component';
import { WhatsInComponent } from './components/wireless-info/whats-in/whats-in.component';
import { CardComponent } from './components/card/card.component';
import {FormsModule} from '@angular/forms';
import { PreferencesComponent } from './components/preferences/preferences.component';

@NgModule({
  declarations: [
    WirelessLandingComponent,
    WirelessInfoComponent,
    WirelessPreviewComponent,
    HeaderComponent,
    IconsComponent,
    OverviewComponent,
    FeaturesComponent,
    WhatsInComponent,
    CardComponent,
    PreferencesComponent,
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule
    ],
  exports: [
    WirelessLandingComponent

  ]
})
export class HomeModule { }
