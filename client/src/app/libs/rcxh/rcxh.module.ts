import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LoginFormComponent } from "./pages/login-form/login-form.component";
import { PageComponent } from './pages/page/page.component';
// import { SideNavInnerToolbarComponent } from 'src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component';

@NgModule({
  declarations: [LoginFormComponent, PageComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild([
      { path: "", redirectTo: "/rcxh/login", pathMatch: "full" },
      { path: "login", component: LoginFormComponent },
      { path: "admin/page/:dvoFullName", children: [{ path: "", component: PageComponent }] }

      //   { path: "page", component: PageComponent },
      //   { path: "personal", component: PersonalPageComponent },
      //   { path: "design", component: DesignPageComponent }
    ])
  ],
  providers: []
})
export class RcxhModule { }
