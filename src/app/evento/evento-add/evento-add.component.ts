import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventoService } from 'src/app/services/evento.service';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/Evento';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css'],
})
export class EventoAddComponent implements OnInit {
  form!: FormGroup;
  submmited = false;
  constructor(
    private formBuilder: FormBuilder,
    private _eventoService: EventoService,
    private _location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this._eventoService.loadById(id))
      )
      .subscribe((evento) => this.updateForm(evento));

    this.form = this.formBuilder.group({
      id: [null],
      titulo: [null, [Validators.minLength(2), Validators.maxLength(200)]],
      descricao: [null, [Validators.minLength(2), Validators.maxLength(400)]],
      imagem: [null, [Validators.minLength(2)]],
      data_criacao: [null, [Validators.minLength(8), Validators.maxLength(12)]],
      data_fim: [null, [Validators.minLength(8), Validators.maxLength(12)]],
    });
  }

  updateForm(evento: Evento): void{
    this.form.patchValue({ 
      id: evento.id,
      titulo: evento.titulo,
      descricao: evento.descricao,
      imagem: evento.imagem,
      data_criacao: evento.data_criacao,
      data_fim: evento.data_fim,
    })
  }

  onSubmit(): void {
    this.submmited = true;
    if (this.form.valid) {
      this._eventoService.postEvento(this.form.value).subscribe(
        (success) => {
          this._location.back();
        },
        (error) => console.log(error),
        () => console.log('request OK')
      );
    }
  }
  onCancel(): void {
    this.submmited = false;
    this.form.reset();
  }
}
