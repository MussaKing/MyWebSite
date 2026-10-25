import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TECHS} from "../tech/tech.data";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  skills = TECHS;

  stats = [
    {value: 'REST', label: 'проектирование API'},
    {value: 'SQL', label: 'оптимизация запросов'}
  ];

  services = [
    {
      title: 'Backend-разработка',
      tag: 'PYTHON · C#',
      description: 'Серверная логика веб-приложений на Django, Flask и ASP.NET Core.'
    },
    {
      title: 'REST API и интеграции',
      tag: 'API',
      description: 'Проектирование API и интеграции с внешними сервисами для автоматизации процессов.'
    },
    {
      title: 'Оптимизация',
      tag: 'POSTGRESQL',
      description: 'Ускорение SQL-запросов и backend-логики, поддержка production-систем.'
    }
  ];
}
