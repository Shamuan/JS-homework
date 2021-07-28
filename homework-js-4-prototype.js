var handbag = {
  content: ['phone', 'passport', 'apple'],

     addContent: function (name) {
       this.content.push (name)
     },
     deleteContent: function (num) {
       this.content.splice (num, 1)
     }
}