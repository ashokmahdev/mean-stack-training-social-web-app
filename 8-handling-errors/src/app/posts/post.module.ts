import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PostCreateComponent } from "../posts/post-create/post-create.component";
import { PostListComponent } from "../posts/post-list/post-list.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "./../angular-material.module";

@NgModule({
  declarations: [PostCreateComponent, PostListComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
})
export class PostsModule {}
