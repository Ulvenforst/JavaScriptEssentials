/**
 * Class for books.
 */

class Book {
  constructor(
    title,
    pageNumber,
    category,
    isRead,
    likeScore
  ){
    this.title = title;
    this.pageNumber = pageNumber;
    this.category = category;
    this.isRead = isRead;
    this.likeScore = likeScore;
  }
  // Methods
  /**
   * Changes the book read status to true.
   */
  readBook() {
    if(this.isRead == false){
      this.isRead = true;
    }
  }
  /**
   * Updates the likeScore.
   * @param {int} givenQualification 
   */
  newLikeScore(givenQualification){
    this.likeScore = givenQualification;
  }
}

export default Book;