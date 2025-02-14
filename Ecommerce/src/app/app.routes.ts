import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent, title: 'Product List' },
    { path: 'product/:id', component: ProductDetailsComponent, title: 'Product Details' },
    { path: 'cart', component: CartComponent, title: 'Cart' },
    { path: 'login', component: LoginComponent, title: 'Login' },
    { path: 'register', component: RegisterComponent, title: 'Register' },
    { path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];
