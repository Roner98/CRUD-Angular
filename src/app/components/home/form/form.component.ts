
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { nails } from '../../nails';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  formulario!: FormGroup
  @Input() nailsForm: nails | null = null
  @Output() onSubimit = new EventEmitter<nails>


  ngOnInit(){
    this.formulario = new FormGroup({
      id: new FormControl (this.nailsForm? this.nailsForm.id:'',),
      title: new FormControl (this.nailsForm? this.nailsForm.title:'', [Validators.required]),
      description: new FormControl (this.nailsForm? this.nailsForm.description:'', Validators.required),
      image: new FormControl ('')
    })


  }

  get title (){
    return this.formulario.get('title')!
  }
  get description(){
  return this.formulario.get('description')!
  }

  onFileSelected(event:any){
    const file: File = event.target.files[0]
    return this.formulario.patchValue({image:file})
  }

  submit(){
     this.onSubimit.emit(this.formulario.value)

    }
}

