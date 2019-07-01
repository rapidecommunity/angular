import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post : Post;

  constructor() { }

  ngOnInit() {
  }

  onLike(){
    this.post.loveIts +=1;
  }

  onDislike(){
    this.post.loveIts -=1;
  }

}
