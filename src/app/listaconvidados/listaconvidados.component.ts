import { IColaborador } from './../servicos/colaborador';
import { Component, OnInit } from '@angular/core';
import { ColaboradorServiceService } from '../servicos/colaborador-service.service';

@Component({
  selector: 'app-listaconvidados',
  templateUrl: './listaconvidados.component.html',
  styleUrls: ['./listaconvidados.component.css']
})
export class ListaconvidadosComponent implements OnInit {

  colaboradores: IColaborador[];

  constructor(private colaboradorService: ColaboradorServiceService) { }

  ngOnInit(): void {
    this.colaboradorService.getColaboradores()
      .subscribe(data => this.colaboradores = data);
  }
}
