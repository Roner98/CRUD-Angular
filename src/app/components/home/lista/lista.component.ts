import { NailserviceService } from './../../service/nailservice.service';
import { Component } from '@angular/core';
import { nails } from '../../nails';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  api = 'http://localhost:3333/'

  nails:nails[] = []
  nailsAll:nails[]=[]

  constructor(private service: NailserviceService){}

  ngOnInit(){
    this.service.getElement().subscribe((item)=>{
     const data = item.data

     data.map((items)=>{
     items.created_at = new Date (items.created_at!).toLocaleDateString(
      'pt-br'
     )
     })

     this.nails = data
     this.nailsAll = data

    })
  }

  search(e: Event): void{
    const target = e.target as HTMLInputElement
    const value = target.value

    this.nails = this.nailsAll.filter((nails)=>{
     return nails.title.toLowerCase().includes(value)

    })

  }

}

