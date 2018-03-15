import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { IonicModule } from 'ionic-angular';
import { CommentsComponent } from './comments/comments';
import { ChartLinesComponent } from './chart-lines/chart-lines';

@NgModule({
	declarations: [CompanyComponent,
    CommentsComponent,
    ChartLinesComponent],
	imports: [IonicModule],
	exports: [CompanyComponent,
    CommentsComponent,
    ChartLinesComponent]
})
export class ComponentsModule {}
