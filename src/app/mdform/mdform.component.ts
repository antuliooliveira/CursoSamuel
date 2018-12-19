// Exercício: Model Driven

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { CAValidators } from '../shared/validators';

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css']
})
export class MDFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group ({
      codigo: [null, CAValidators.validarCodigoFactory(100)],
      dados: this.fb.group ({
        titulo: [null, Validators.required],
        descricao: [null, [Validators.required, Validators.minLength(5)]]
      })
    });


    // this.form =  new FormGroup({
    //   codigo: new FormControl(),
    //   dados: new FormGroup ({
    //     titulo: new FormControl(null, Validators.required),
    //     descricao: new FormControl(null, Validators.required)
    //   })
    // });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.buildForm();
  }
}
