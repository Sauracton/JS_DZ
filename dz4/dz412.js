'use strict'
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
PostES5.prototype.edit = function (text) {
    this.text = text;
};

class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highligthed = false;
}
AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;
AttachedPostES5.prototype.makeTextHighlighted = function () {
    this.highligthed = true;
};

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highligthed = false;
    }
    makeTextHighlighted() {
        this.highligthed = true;
    }
}


const post1 = new PostES5('user1', 'text1', new Date());
const post2 = new PostES6('user2', 'text2', new Date());
console.log(post1);
console.log(post2);
post1.edit('text12');
post2.edit('text22');
console.log(post1);
console.log(post2);

const attachedPost1 = new AttachedPostES5('user1', 'text13', new Date());
const attachedPost2 = new AttachedPostES6('user1', 'text23', new Date());
console.log(attachedPost1);
console.log(attachedPost2);
attachedPost1.edit('text14');
attachedPost2.edit('text24');
attachedPost1.makeTextHighlighted();
attachedPost2.makeTextHighlighted();
console.log(attachedPost1);
console.log(attachedPost2);