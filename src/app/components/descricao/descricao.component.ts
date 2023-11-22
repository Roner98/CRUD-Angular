import { MessageService } from './../service/message.service';
import { NailserviceService } from './../service/nailservice.service';
import { Component } from '@angular/core';
import { nails } from '../nails';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.scss']
})
export class DescricaoComponent {

  api = 'http://localhost:3333/'

  nails!:nails

  constructor(private service: NailserviceService,
    private message: MessageService,
    private route: ActivatedRoute,
    private router: Router){}


    ngOnInit(){
      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.service.getId(id).subscribe((item)=>this.nails = item.data)
    }

     removeRendller(id:number){

      const title = this.nails.title

      this.service.remove(id).subscribe()

      this.message.add(`o item ${title} foi removido com sucesso`)

      this.router.navigate(['/'])

    }

}
