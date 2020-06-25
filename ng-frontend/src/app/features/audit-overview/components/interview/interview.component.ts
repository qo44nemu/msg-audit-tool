import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Interview } from 'src/app/core/data/models/interview.model';
import { FacCrit } from 'src/app/core/data/models/faccrit.model';
import { Select, Store } from '@ngxs/store';
import { AuditState } from 'src/app/core/ngxs/audit.state';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  interview$: Observable<Interview>;
  facCrit$: Observable<FacCrit>;

  @Select(AuditState.facCrits) facCrits$: Observable<FacCrit[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const facCritId = params.get('facCritId');
      const interviewId = params.get('interviewId');

      if (!facCritId || !interviewId) {
        this.router.navigate(['/audits']);
      }

      this.facCrit$ = this.store.select(AuditState.facCrit(facCritId));
      this.interview$ = this.store.select(AuditState.interview(interviewId));

      this.facCrit$.subscribe(facCrit => facCrit ?? this.router.navigate(['/audits']));
      this.interview$.subscribe(interview => interview ?? this.router.navigate(['/audits']));
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const guardY = document.querySelector('#guard').getBoundingClientRect().y;
    if (scrollPosition >= guardY) {
      const goalHeight = document.querySelector('#goals-item').clientHeight + 30;
      document.querySelector('#goals').classList.add('goals-not-at-top');
      document.getElementById('pad').style.paddingTop = goalHeight.toString() + 'px';
    } else {
      document.querySelector('#goals').classList.remove('goals-not-at-top');
      document.getElementById('pad').style.paddingTop = '0px';
    }
  }
}
