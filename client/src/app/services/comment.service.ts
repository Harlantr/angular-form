import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment } from '../components/comment/comment';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
    constructor(private http: Http) {

    }
    private commentsUrl = 'http://localhost:3000/api/comments';

    getComments(): Observable<Comment[]> {
        return this.http.get(this.commentsUrl)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server Error');
            })
    }

    addComment(body:Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.commentsUrl, body, options)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json().error || 'Server Error');
            })
    }

    removeComment (id:string): Observable<Comment[]> {
        return this.http.delete(`${this.commentsUrl}/${id}`)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json().error || 'Server Error');
            })
    }
}