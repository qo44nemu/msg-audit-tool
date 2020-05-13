import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Audit } from 'src/app/data/models/audit.model';
import { Store } from '@ngxs/store';
import { AuditRegistryState } from 'src/app/ngxs/audit-registry.state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factor-list',
  templateUrl: './factor-list.component.html',
  styleUrls: ['./factor-list.component.scss'],
})
export class FactorListComponent implements OnInit {
  audit$: Observable<Audit>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.audit$ = this.store.select(AuditRegistryState.audit(id));
  }
}
