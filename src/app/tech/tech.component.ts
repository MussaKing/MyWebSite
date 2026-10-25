import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {findTech, Tech, TECHS} from "./tech.data";

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tech.component.html'
})
export class TechComponent {
  tech?: Tech;
  related: Tech[] = [];
  all = TECHS;

  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      this.tech = findTech(params.get('id'));
      this.related = (this.tech?.related ?? []).map(id => findTech(id)!).filter(Boolean);
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
}
