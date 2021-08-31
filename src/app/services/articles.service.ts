import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


class Repo{
  constructor(
    public id: string,
    public name: string
  ){}

}

@Injectable()
export class ArticleService{

  public articlesCount:number = 0;
  constructor(private http: HttpClient) {

  }

  getAll(){
    this.http.get('https://api.github.com/users/Jlima2016306/repos')
    .pipe(map((data : any) =>{ return data[0]; }))
    .subscribe(data =>{
    console.log(data);

    })
  }



  buildObservable(): Observable<any>{
    return Observable.create(function(observer:any){
      setInterval(()=> observer.next("hola"),1000)

    })

  }
}
