import React from 'react';
import bookListData from './data/bookList';

console.log(bookListData);


class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleClick() {
    this.setState({ ...this.state, expanded: !this.state.expanded });
  }

  render() {
    let { title, author, text, image, price } = this.props;
    return(
      <div>
        <img src={ image } />
        <h1>{ title }</h1>
        <h2>{ author }</h2>
        <h4><i>{ price || 'no price' }€</i></h4>
        <p onClick={ this.handleClick.bind(this) }>
          { this.state.expanded ? text : `${text.slice(0,140)} ...` }
        </p>
      </div>
    );
  }
}

Book.defaultProps = {
  price: 50
};

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string,
  price: React.PropTypes.number,
  image: React.PropTypes.string,
  text: React.PropTypes.string
};


class BookList extends React.Component {
  render() {
    return(
      <div>
        <h1>Book List</h1>
        <ul className='bookGrid'>
          { Object.keys(this.props.books).map((bookId, index) => {
            let book = this.props.books[bookId];
            console.log('book:', book, bookId);
            return <li key={ index }>
              <Book {...book} />
            </li>
          }) }
        </ul>
      </div>
    );
  }
}


export default () => {
  return <BookList books={ bookListData } />
}
