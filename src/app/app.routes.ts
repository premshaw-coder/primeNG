import { Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';

export const routes: Routes = [
    { path: 'callback/:id', component: CallbackComponent, data: {some_data: 'some value'} }
];
