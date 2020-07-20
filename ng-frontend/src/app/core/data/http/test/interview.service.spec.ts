import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InterviewService } from '../interview.service';
import { InterviewDto } from '../dtos/interview.dto';
import { INTERVIEWS_RESPONSE } from './dummies/responses/interviews-response';
import { Interview } from '../../models/interview.model';
import { environment } from 'src/environments/environment';
import { FACCRITS } from './dummies/app-models/faccrits';
import { INTERVIEWS } from './dummies/app-models/interviews';

describe('InterviewService', () => {
  let service: InterviewService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InterviewService],
    });

    service = TestBed.inject(InterviewService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('#getInterviews should return an observable interviews', () => {
    const response: InterviewDto[] = INTERVIEWS_RESPONSE;

    service.getInterviews().subscribe(interviews => {
      for (const [i, interview] of interviews.entries()) {
        verifyInterviewContent(interview, response[i]);
      }
    });

    const req = httpMock.expectOne(environment.baseUrl + 'interviews');
    expect(req.request.method).toEqual('GET');

    req.flush(response);
    httpMock.verify();
  });

  it('#getInterview should return an observable of an interview', () => {
    const response: InterviewDto = INTERVIEWS_RESPONSE[0];

    service.getInterview(1).subscribe(interview => {
      verifyInterviewContent(interview, response);
    });

    const req = httpMock.expectOne(environment.baseUrl + 'interviews/' + 1);
    expect(req.request.method).toEqual('GET');

    req.flush(response);
    httpMock.verify();
  });

  it('#postInterview should return an observable of an interview', () => {
    const response: InterviewDto = INTERVIEWS_RESPONSE[0];

    service.postInterview(INTERVIEWS[0], FACCRITS).subscribe(interview => {
      verifyInterviewContent(interview, response);
    });

    const req = httpMock.expectOne(environment.baseUrl + 'interviews');
    expect(req.request.method).toEqual('POST');

    req.flush(response);
    httpMock.verify();
  });

  it('#putInterview should return an observable of an interview', () => {
    const response: InterviewDto = INTERVIEWS_RESPONSE[0];

    service.putInterview(INTERVIEWS[0]).subscribe(interview => {
      verifyInterviewContent(interview, response);
    });

    const req = httpMock.expectOne(environment.baseUrl + 'interviews/' + INTERVIEWS[0].id);
    expect(req.request.method).toEqual('PUT');

    req.flush(response);
    httpMock.verify();
  });

  function verifyInterviewContent(interview: Interview, interviewDto: InterviewDto) {
    const { id, status, startDate, contactPersons, answers, auditId, note } = interview;
    expect(id).toEqual(interviewDto.id);
    expect(startDate).toEqual(new Date(interviewDto.startDate).getTime());
    expect(status).toEqual(interviewDto.status);
    expect(contactPersons).toEqual(interviewDto.interviewedContactPersons);
    expect(answers).toEqual(interviewDto.answers);
    expect(auditId).toEqual(interviewDto.auditId);
    expect(note).toEqual(interviewDto.note);
  }
});
