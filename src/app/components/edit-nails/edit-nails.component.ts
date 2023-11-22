import { MessageService } from './../service/message.service';
import { NailserviceService } from './../service/nailservice.service';
import { Component } from '@angular/core';
import { nails } from '../nails';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-nails',
  templateUrl: './edit-nails.component.html',
  styleUrls: ['./edit-nails.component.scss']
})
export class EditNailsComponent {

  nails!:nails

  constructor(private service: NailserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private message: MessageService){}

    ngOnInit(){
      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.service.getId(id).subscribe((item)=>this.nails = item.data)
    }

    editRendller(nails:nails){

      const id = this.nails.id
      const title = this.nails.title

      const formData = new FormData()

      formData.append('title', nails.title),
      formData.append('description', nails.description)
      if(nails.image){
       formData.append('image', nails.image)
      }

      this.service.edit(id!, formData).subscribe()

      this.message.add(`o item ${title} foi editado para ${formData.get('title')} com sucesso`)

      this.router.navigate(['/lista'])

    }
}
