import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { IconButtonsComponent } from './components/header/icon-buttons/icon-buttons.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { MobileMenuComponent } from './components/header/mobile-menu/mobile-menu.component';
import { NavigationMenuComponent } from './components/header/navigation-menu/navigation-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryPipe } from './pipes/category.pipe';
import { FreeDeliveryBannerComponent } from './components/free-delivery-banner/free-delivery-banner.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    ErrorDialogComponent,
    CategoryPipe,
    HeaderComponent,
    CarouselComponent,
    LogoComponent,
    NavigationMenuComponent,
    IconButtonsComponent,
    MobileMenuComponent,
    ProductListComponent,
    FreeDeliveryBannerComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [HeaderComponent, CarouselComponent, ProductListComponent, FreeDeliveryBannerComponent],
})
export class SharedModule {}
