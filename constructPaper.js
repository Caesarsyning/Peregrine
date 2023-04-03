const paper_sections = require('./Static/paper')
// paper object by constructor
function paper(title, author, sections){
    this.title = title;
    this.author = author;
    this.sections = sections;
}

const paper_title = "Blockchains and Cryptographic Hashes to Regulate the Proliferation of Deepfakes"
const author_name = "Ahmed Hussain, Zachary Yahn"

const oldWhitePaper = new paper(paper_title,author_name,paper_sections)


module.exports = oldWhitePaper;








