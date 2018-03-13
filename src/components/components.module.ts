import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { IonicModule } from 'ionic-angular';
import { CommentsComponent } from './comments/comments';

@NgModule({
	declarations: [CompanyComponent,
    CommentsComponent],
	imports: [IonicModule],
	exports: [CompanyComponent,
    CommentsComponent]
})
export class ComponentsModule {}
