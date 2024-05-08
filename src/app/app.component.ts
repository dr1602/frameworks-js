import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

type Framework = {
  title: string;
  imgUrl: string;
  repoUrl: string;
}

type Frameworks = Array<Framework>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: String = 'Frameworks de JavaScript';
  frameworks: Frameworks = [
    {
      title: 'NextJS',
      imgUrl: 'https://i.pinimg.com/564x/1f/24/1d/1f241dd5db6f680253d76f371add690a.jpg',
      repoUrl: 'https://github.com/dr1602/platzi-next',
    },
    {
      title: 'NUxtJS',
      imgUrl: 'https://i.pinimg.com/564x/a1/38/94/a1389401ca454e087154041a5f1beeb6.jpg',
      repoUrl: 'https://github.com/dr1602/platzi-nuxt',
    },
    {
      title: 'Svelte',
      imgUrl: 'https://i.pinimg.com/564x/5d/c3/0d/5dc30d4ba8f3008f6dee639456b73aed.jpg',
      repoUrl: 'https://github.com/dr1602/platzi-svelte',
    },
    {
      title: 'VueJS',
      imgUrl: 'https://i.pinimg.com/564x/8c/30/b8/8c30b8108e56102b349fb0c226f6710c.jpg',
      repoUrl: 'https://github.com/dr1602/platzi-vue',
    },
    {
      title: 'AngularJS',
      imgUrl: 'https://i.pinimg.com/564x/1d/78/36/1d7836b162169e9836b6761253132a81.jpg',
      repoUrl: 'https://github.com/dr1602/platzi-angular',
    },
    {
      title: 'ReactJS',
      imgUrl: 'https://i.pinimg.com/564x/7b/7e/0f/7b7e0fbc455d4198d38fa02d5051ffe7.jpg',
      repoUrl: 'https://github.com/dr1602/platzip-react',
    },
  ]
}
