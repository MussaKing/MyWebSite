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
    },
    {
      name: 'Путь мусульманина',
      tag: 'ANDROID · KOTLIN · JETPACK COMPOSE · SUPABASE',
      description: 'Android-приложение для тех, кто начинает знакомиться с исламом: короткие уроки с прогрессом, ' +
        'Коран с переводом и аудио, время намаза с азаном и виджетами. Работает офлайн без регистрации, опубликовано в RuStore.',
      features: [
        '5 учебных маршрутов, 27 уроков с источниками и мини-тестами, закладки и поиск',
        'Коран: арабский текст, перевод Крачковского, аудио по аятам от 14 чтецов, продолжение с места остановки',
        'Время намаза по расписанию ДУМ КБР или расчёт для любого города, напоминания, азан и виджеты на главный экран',
        'Раздел вопросов и ответов с формой для своего вопроса',
        'Гостевой режим офлайн, синхронизация через аккаунт Supabase'
      ],
      links: [
        {label: 'GitHub ↗', href: 'https://github.com/MussaPortfolio/MuslimPath'},
        {label: 'Анонс в Telegram ↗', href: 'https://t.me/blogprodev/248'},
        {label: 'Релиз в RuStore ↗', href: 'https://t.me/blogprodev/249'}
      ],
      mobile: true,
      screenshots: [
        {src: 'assets/projects/muslimpath/home.png', caption: 'Главная'},
        {src: 'assets/projects/muslimpath/learn.png', caption: 'Обучение'},
        {src: 'assets/projects/muslimpath/quran.png', caption: 'Коран'},
        {src: 'assets/projects/muslimpath/prayer.png', caption: 'Намаз'}
      ],
      active: 0
    }
  ];
}
