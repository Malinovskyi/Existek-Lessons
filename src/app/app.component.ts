import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from './models.ts/post';
import { TableHeaders } from './models.ts/post-headers';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  posts: Post[] = [];
  titles = TableHeaders;
  form!: FormGroup;
  changeVisibility: boolean = false;
  newPost!: Post;
  editPost!: Post;
  addBtnTitle: string = 'Add new';
  saveBtn: string = 'Save';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPosts();
    this.initForm();
  }

  getPosts() {
    this.apiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  deletePost(post: Post) {
    this.apiService.deletePost(post).subscribe((data) => {
      const deletedIndex = this.posts.indexOf(post);
      this.posts.splice(deletedIndex, 1);
    });
  }

  addPost() {
    this.apiService.addPost(this.newPost).subscribe((data: Post) => {
      this.posts.push(data);
    });
  }

  initForm() {
    this.form = new FormGroup({
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      streetName: new FormControl('', Validators.required),
      streetAddress: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
    });
  }

  edit(item: Post) {
    this.addBtnTitle = 'Edit';
    this.saveBtn = 'Edit';
    this.changeVisibility = true;
    this.form.patchValue(item);
  }

  createNewPost() {
    this.changeVisibility = false;
    this.newPost = this.form.value;
    if (this.addBtnTitle === 'Add new') {
      this.addPost();
    } else if (this.addBtnTitle === 'Edit') {
      this.updatePost(this.form.value);
    }
    this.addBtnTitle = 'Add new';
    this.saveBtn = 'Save';
    this.form.reset();
  }

  updatePost(item: Post) {
    this.apiService.updatePost(item).subscribe((data: Post) => {
      const indexOfItem = this.posts.indexOf(item);
      this.posts[indexOfItem] = data;
      console.log(this.posts);
      this.getPosts();
    });
  }
}
