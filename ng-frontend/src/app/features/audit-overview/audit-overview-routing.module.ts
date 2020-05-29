import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditOverviewComponent } from './components/audit-overview/audit-overview.component';
import { NewInterviewDialogComponent } from './components/audit-overview/interview-list/new-interview-dialog/new-interview-dialog.component';
import { InterviewListComponent } from './components/audit-overview/interview-list/interview-list.component';
import { AuditInfoComponent } from './components/audit-overview/audit-info/audit-info.component';
import { EditAuditDialogComponent } from 'src/app/shared/components/dialogs/edit-audit-dialog/edit-audit-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: AuditOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'interviews',
        pathMatch: 'full',
      },
      {
        path: 'interviews',
        component: InterviewListComponent,
        children: [{ path: 'new', component: NewInterviewDialogComponent }],
      },
      {
        path: 'infos',
        component: AuditInfoComponent,
        children: [{ path: 'edit', component: EditAuditDialogComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditOverviewRoutingModule {}