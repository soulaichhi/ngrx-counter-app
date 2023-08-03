import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://vue-completecourse.firebaseio.com/posts.json`).pipe(
      map(data => {
        const posts: Post[] = [];
        for (let key in data) {
          posts.push({...data[key], id: key})
        }
        return posts;
      })
    )
  }
}
