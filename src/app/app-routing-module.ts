import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemanComponent } from './teman/teman.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BukuComponent} from './buku/buku.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: '404', component: PageNotFoundComponent },
    {path: 'teman', component: TemanComponent },
    {path: 'header', component: HeaderComponent },
    {path: 'contact-us', component: ContactUsComponent },
    {path: 'buku', component: BukuComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}