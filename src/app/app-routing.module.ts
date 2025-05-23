import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {ProductsComponent} from "./pages/products/products.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {UsersComponent} from "./pages/users/users.component";
import {LogsComponent} from "./pages/logs/logs.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {authGuard} from "./services/guard/auth.guard";
import {MapComponent} from "./pages/map/map.component";
import {TicketComponent} from "./pages/ticket/ticket.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {CustomersComponent} from "./pages/customers/customers.component";
import {adminprotectGuard} from "./services/guard/adminprotect.guard";


@NgModule({
    imports: [
        RouterModule.forRoot([

            {path:'login',component:LoginComponent},
            {    path: '', component: AppLayoutComponent,canActivate:[authGuard],
                children: [
                    {path:"products",component:ProductsComponent},
                    {path:"orders",component:OrdersComponent},
                    {path:"users",component:UsersComponent,canActivate:[adminprotectGuard]},
                    {path:"logs",component:LogsComponent,canActivate:[adminprotectGuard]},
                    {path:"maps",component:MapComponent},
                    {path:"tickes",component:TicketComponent},
                    {path:"profile",component:ProfileComponent},
                    {path:"customers",component:CustomersComponent},
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
