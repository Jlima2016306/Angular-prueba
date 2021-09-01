import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { map ,share} from 'rxjs/operators';

class Repo{
  constructor(
    public id: string,
    public name: string
  ){}

}

@Injectable()
export class ArticleService{
  public articlesCount:number = 0;
  public reposObserver! : Observable<Repo[]>;
  public reposCount!: number;
  public  mainRepo!: Repo;



  constructor(private http: HttpClient) {
    this.countRepos()
    this.getMainRepo()
  }

  getAll(){
    this.reposObserver = this.http.get('https://api.github.com/users/Jlima2016306/repos')
    .pipe(map((data : any) =>{
       return data.map((r:any) => new Repo(r.id,r.name)); })),
       share()

  }



  countRepos(){
    //no usar fetch
    fetch('https://api.github.com/users/Jlima2016306/repos')
      .then(response => response.json())
      .then(repos => this.reposCount = repos.length)



  }


  getMainRepo(){
    fetch('https://api.github.com/users/Jlima2016306/repos')
    .then(response => response.json())

    .then(repos =>{
      const JSonRepo =  repos[repos.length-1]
      this.mainRepo = new Repo(JSonRepo.id, JSonRepo.name)
    }
    )

  }
}
