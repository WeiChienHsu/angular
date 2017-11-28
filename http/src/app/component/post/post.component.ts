import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
    
  constructor(private service: PostService) { }

//Get
   ngOnInit(){
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
    }, error => {
      alert('An unexpected error occurred.')
    });

   }

//Create
  createPost(input: HTMLInputElement){
    let post = { title: input.value};
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      },(error: Response) => {
        if (error.status === 400){
          // this.form.setErrors(error.json())
        } 
        else {
          alert('An unexpected error occurred.')
        } 
      })
  }
//Update
  updatePost(post){
    this.service.updatePost(post)
      .subscribe(response => {
      console.log(response.json());
    }, error => {
      alert('An unexpected error occurred.')
    })
  }
// Delete
  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
      }, 
        (error: Response) => {
          if (error.status === 404)
            alert('This post has already been deleted');
          else {
            alert('An unexpected error occurred.');
          }
            
    })
  }
}
