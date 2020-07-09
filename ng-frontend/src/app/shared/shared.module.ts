import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebularModule } from './nebular/nebular.module';
import { AddAuditDialogComponent } from './components/dialogs/add-audit-dialog/add-audit-dialog.component';
import { EditAuditDialogComponent } from './components/dialogs/edit-audit-dialog/edit-audit-dialog.component';
import { ActionListenerDirective } from './directives/action-listener.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmDiscardDialogComponent } from './components/dialogs/confirm-discard-dialog/confirm-discard-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddContactPersonDialogComponent } from './components/dialogs/add-contact-person-dialog/add-contact-person-dialog.component';
import { ContactPersonFormComponent } from './components/forms/contact-person-form/contact-person-form.component';
import { EditContactPersonDialogComponent } from './components/dialogs/edit-contact-person-dialog/edit-contact-person-dialog.component';
import { AuditFormComponent } from './components/forms/audit-form/audit-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarInterviewListComponent } from './components/sidebar/sidebar-interview-list/sidebar-interview-list.component';
import { SidebarInterviewComponent } from './components/sidebar/sidebar-interview/sidebar-interview.component';
import { FactorsPipe } from './pipes/factors.pipe';
import { CriteriasPipe } from './pipes/criterias.pipe';
import { InterviewFormComponent } from './components/forms/interview-form/interview-form.component';
import { NewInterviewDialogComponent } from './components/dialogs/new-interview-dialog/new-interview-dialog.component';

@NgModule({
  declarations: [
    AddAuditDialogComponent,
    EditAuditDialogComponent,
    ActionListenerDirective,
    SidebarComponent,
    AddContactPersonDialogComponent,
    InterviewFormComponent,
    AuditFormComponent,
    ContactPersonFormComponent,
    EditContactPersonDialogComponent,
    NewInterviewDialogComponent,
    SidebarInterviewListComponent,
    SidebarInterviewComponent,
    NotFoundComponent,
    ConfirmDiscardDialogComponent,
    FactorsPipe,
    CriteriasPipe,
  ],
  imports: [CommonModule, RouterModule, NebularModule, ReactiveFormsModule],
  exports: [NebularModule, ActionListenerDirective, SidebarComponent, FactorsPipe],
})
export class SharedModule {}
