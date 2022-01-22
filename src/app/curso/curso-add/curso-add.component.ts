import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/models/Curso';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styleUrls: ['./curso-add.component.css'],
})
export class CursoAddComponent implements OnInit {
  form!: FormGroup;
  submmited = false;

  constructor(
    private formBuilder: FormBuilder,
    private _cursoService: CursoService,
    private _location: Location,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(map((params: any) =>  params['id']),
    switchMap(id => this._cursoService.loadById(id))
    ).subscribe(curso => this.updateForm(curso));

    this.form = this.formBuilder.group({
      id: [null],
      titulo: [null, [Validators.minLength(2), Validators.maxLength(200)]],
      descricao: [null, [Validators.minLength(2), Validators.maxLength(400)]],
      imagem: [null, [Validators.minLength(2)]],
      data_registro: [
        null,
        [Validators.minLength(8), Validators.maxLength(12)],
      ],
    });
  }

  updateForm(curso: Curso): void{
    this.form.patchValue({ 
      id: curso.id,
      titulo: curso.titulo,
      descricao: curso.descricao,
      imagem: curso.imagem,
      data_registro: curso.data_registro,
    })
  }

  onSubmit(): void {
    this.submmited = true;
    if (this.form.valid) {
      this._cursoService.postCurso(this.form.value).subscribe(
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
