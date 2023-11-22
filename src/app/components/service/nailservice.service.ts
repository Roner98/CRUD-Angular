import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../response';
import { nails } from '../nails';

@Injectable({
  providedIn: 'root'
})
export class NailserviceService {

  baseApiUrl = 'http://localhost:3333/api/moments'

  constructor(private http: HttpClient) { }

  creatElement(formData: FormData):Observable<Response<nails>>{
  return this.http.post<Response<nails>>(this.baseApiUrl, formData)
  }
  getElement():Observable<Response<nails[]>>{
  return this.http.get<Response<nails[]>>(this.baseApiUrl)
  }
  getId(id:number):Observable<Response<nails>>{
    const url = `${this.baseApiUrl}/${id}`
    return this.http.get<Response<nails>>(url)
  }
  remove(id:number){
   const url = `${this.baseApiUrl}/${id}`
   return this.http.delete(url)
  }

  edit(id:number, formData: FormData):Observable<Response<nails>>{
  const url = `${this.baseApiUrl}/${id}`
  return this.http.put<Response<nails>>(url, formData)
  }

}
