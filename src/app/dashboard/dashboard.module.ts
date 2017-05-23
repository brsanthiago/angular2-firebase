import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

/**
 * @description Dashboard Module
 * @author Bruno Santiago
 * @version 1.0
 * @since 22/05/2017
 */
@NgModule({
  imports: [
    RouterModule.forChild(MODULE_ROUTES)
  ],
    declarations: [ MODULE_COMPONENTS ]
})
export class DashboardModule { }
