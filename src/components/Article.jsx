import React from 'react';
import PropTypes from 'prop-types';
import EditArticle from './EditArticle';

class Article extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    const newState = Object.assign({}, this.state);
    newState.editMode = !newState.editMode;
    this.setState({editMode: newState.editMode});
  }

  render() {
    const imageStyle = {
      maxWidth: '250px',
      maxHeight: '175px',
      minWidth: '250px',
      minHeight: '175px'
    }
    let ticketStyles = {
      display: 'flex',
      backgroundColor: '#1e2023',
      fontFamily: 'sans-serif',
      paddingTop: '25x',
      transition: '.3s linear',
      margin: '10px 0px',
      padding: '0px 10px',
      width: '60%',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '50px'
    };
    let ArticleView = null;
    let EditOptions = null;
    if (this.state.editMode) {
      EditOptions = <div ><button onClick={this.toggleEdit}>Close edit mode</button></div>;
      ArticleView = <div ><EditArticle title={this.props.title}
        description={this.props.description}
        link={this.props.link}
        photo={this.props.photo}
        index={this.props.index} 
        onSubmitToggle={this.toggleEdit}
        onEditArticle={this.props.onEditArticle}/></div>;
    } else {
      if (this.props.editEnabled) {
        EditOptions = <div><button onClick={this.toggleEdit}>Open edit mode</button></div>;
      } else {
        EditOptions = null; 
      }
      ArticleView = <div><img style={imageStyle} src={require(`../assets/images/${this.props.photo}.jpg`)} alt="article" /><h2 className="article-title"><a href={this.props.link}>{this.props.title}</a></h2><p className="article-description">{this.props.description}</p></div>;
    }

    return (
      <div style = {ticketStyles}>
        <div>
          {EditOptions}
        </div>
        {ArticleView}
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  editEnabled: PropTypes.bool.isRequired,
  onEditArticle: PropTypes.func.isRequired
};

export default Article;
