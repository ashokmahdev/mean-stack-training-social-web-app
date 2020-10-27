import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "./../angular-material.module";
import { LoginComponent } from "../auth/login/login.component";
import { SignupComponent } from "../auth/signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    FormsModule,
    CommonModule,
    AngularMaterialModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
