import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private apiUrl = 'https://dummy.restapiexample.com/api/v1'; // Replace with your API URL
  private _storage: Storage | null = null;

  constructor(private storage: Storage,private http: HttpClient) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods to interact with storage
  public async set_store(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get_store(key: string): Promise<any> {
    return await this._storage?.get(key);
  }


   // Get method
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`).pipe(
      catchError(this.handleError)
    );
  }

  // Post method
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // Put method
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // Delete method
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, this.httpOptions()).pipe(
      catchError(this.handleError)
    );
  }

  // Http Options
  private httpOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { headers: headers };
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }



 }
