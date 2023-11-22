import { MessageService } from './../service/message.service';
import { NailserviceService } from './../service/nailservice.service';
import { Component } from '@angular/core';
import { nails } from '../nails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent {


  constructor(private service: NailserviceService,
    private message: MessageService,
    private router : Router){

  }

  creatHendller(nails: nails){
    const formData = new FormData()
    formData.append('title', nails.title),
    formData.append('description', nails.description)
    if(nails.image){
      formData.append('image', nails.image)
    }

    this.service.creatElement(formData).subscribe()

    this.message.add(`o item ${formData.get('title')} foi adicionado com sucesso`)

    this.router.navigate(['/lista'])
  }

}
