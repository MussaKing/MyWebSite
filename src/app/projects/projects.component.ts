import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'CTFGame',
      tag: 'ASP.NET CORE 8 · RAZOR PAGES · EF CORE · POSTGRESQL · DOCKER',
      description: 'Веб-платформа для соревнований Capture The Flag в формате Jeopardy: ' +
        'игроки решают задания по информационной безопасности, находят флаги и соревнуются за место в рейтинге.',
      features: [
        '16 демо-заданий в категориях Misc, Crypto, Forensics и Web',
        'Регистрация, вход и отправка флагов с автоматической проверкой',
        'Рейтинг по сумме очков с учётом времени их набора',
        'Админка для управления заданиями и просмотра статистики',
        'Хранение хешей флагов, ограничение попыток и запуск в Docker вместе с PostgreSQL'
      ],
      screenshots: [
        {src: 'assets/projects/ctfgame/home.png', caption: 'Главная'},
        {src: 'assets/projects/ctfgame/challenges.png', caption: 'Задания'},
        {src: 'assets/projects/ctfgame/challenge.png', caption: 'Задание'},
        {src: 'assets/projects/ctfgame/admin.png', caption: 'Админка'}
      ],
      active: 0
    },
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
      name: 'Путь (MuslimPath)',
      tag: 'ANDROID · KOTLIN · JETPACK COMPOSE · SUPABASE',
      description: 'Android-приложение для тех, кто начинает изучать Ислам: учебные маршруты и короткие уроки, ' +
        'Коран с переводом и аудио, время намаза с азаном и виджетами. Работает офлайн без регистрации, опубликовано в RuStore.',
      features: [
        'Главный экран: следующий урок с прогрессом, ближайший намаз, сура, на которой вы остановились',
        '5 маршрутов от простого к сложному, 27 уроков с источниками и мини-тестами, поиск, закладки и история',
        'Коран: арабский текст, перевод смыслов Крачковского, аудио по аятам от 14 чтецов, продолжение с того же аята',
        'Время намаза: график ДУМ КБР или расчёт для любого города (10 методов), оповещения, азан и два виджета',
        'Вопросы и ответы с формой для своего вопроса',
        'Гостевой режим офлайн, аккаунт нужен только для синхронизации через Supabase (PostgreSQL + RLS)'
      ],
      links: [
        {label: 'Скачать в RuStore ↗', href: 'https://www.rustore.ru/catalog/app/com.muslimpath.app'},
        {label: 'GitHub ↗', href: 'https://github.com/MussaPortfolio/MuslimPath'},
        {label: 'Анонс в Telegram ↗', href: 'https://t.me/blogprodev/248'},
        {label: 'Релиз в Telegram ↗', href: 'https://t.me/blogprodev/249'}
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
