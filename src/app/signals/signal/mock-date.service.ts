import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";

@Injectable()
export class MockDateService {
  getTimeFromBackend(): Observable<string> {
    // This represents asking the backend for the current date, with a 1 second delay
    const result = new Date().toTimeString()
    return of(result).pipe(delay(1000));
  }
}
