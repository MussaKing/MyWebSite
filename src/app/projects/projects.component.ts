import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'EGENius',
      tag: 'REACT · VITE · PYTHON',
      description: 'Сайт для подготовки к ЕГЭ по информатике: все 27 заданий демоверсии ФИПИ 2027, ' +
        'подробная теория «с нуля», больше 1500 задач с мгновенной проверкой ответа и пробные экзамены на время.',
      features: [
        'Теория по каждому заданию: алгоритм решения, разобранные примеры, шаблоны программ на Python',
        'Банк задач по уровням сложности, сгенерированный скриптом на Python',
        'Демоверсия и случайный вариант с таймером',
        'Просмотр презентаций, PDF и таблиц прямо на сайте',
        'Автоматическая публикация на GitHub Pages через GitHub Actions'
      ],
      github: 'https://github.com/MussaKing/EGEnius',
      screenshots: [
        {src: 'assets/projects/egenius/home.png', caption: 'Главная'},
        {src: 'assets/projects/egenius/tasks.png', caption: 'Задания'},
        {src: 'assets/projects/egenius/task.png', caption: 'Теория'},
        {src: 'assets/projects/egenius/exam.png', caption: 'Демоверсия'}
      ],
      active: 0
    }
  ];
}
