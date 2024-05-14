import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListItem } from './list/list-item.model';

// The App component

// What actually makes a component a component, is the @Component Typescript decorator.
// In this type-decorator, you can define component properties.
@Component({
  selector: 'app-root', // The component's custom HTML tag name, and css selector.
  standalone: true, // Defining the app as standalone, i.e. no modules. (Default as of v17).
  imports: [RouterOutlet, ListComponent], // List imported components here.
  templateUrl: './app.component.html', // The HTML that should be rendered for this component.
  styleUrl: './app.component.scss', // Styles for this component.
})
// A component is a class.
// It's convention to have the word "Component" in the class name as well.
export class AppComponent {
  // You can define variable's here, and use them in the html file.
  title = 'This is my super cool title!';
  cars: ListItem[] = [
    { name: 'Hyundai Sonata', description: 'Sedan' },
    { name: 'Toyota Camry', description: 'Sedan' },
    { name: 'G-Wagon', description: 'idek brother (SUV?)' },
  ];
}
