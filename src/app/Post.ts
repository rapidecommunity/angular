export class Post {
  id: number;
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;


  constructor(id,titre,contenu,like) {
    this.id = id;
    this.title = titre;
    this.content = contenu;
    this.loveIts = like;
    this.createdAt = new Date();
  }
}

