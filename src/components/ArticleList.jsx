import React from 'react';
import Article from './Article';
import SignUpHero from './SignUpHero';
import Conditions from './Conditions';

class ArticleList extends React.Component{

  constructor() {
    super();
    this.state = {
      masterArticleList: [
        {
          title: 'Storm Off the East Coast Has Undergone Bombogenesis',
          description: 'An area of low pressure has rapidly strengthened off the East Coast and become a bomb cyclone.',
          link: 'https://weather.com/forecast/regional/news/2019-04-01-northeast-storm-rain-wind-april-bomb-cyclone?cm_ven=wu_videos?cm_ven=hp-slot-1',
          photo: 'storm'
        },
        {
          title: 'Billion-Dollar Flood',
          description: 'Weeks of heavy rain and flooding in Iran have taken at least 62 lives.',
          link: 'https://www.wunderground.com/cat6/Record-Floods-Iran-Kill-62-Cause-Over-1-Billion-Damage',
          photo: 'flood'
        },
        {
          title: 'Severe Threat Update: Multi-Day, Multi-State',
          description: 'A few tornadoes are possible.',
          link: 'https://weather.com/storms/severe/news/2019-04-01-severe-thunderstorms-forecast-south-plains-mississippi-valley?cm_ven=wu_videos?cm_ven=hp-slot-3',
          photo: 'tornado'
        },
        {
          title: 'Hothouse Earth in Our Feature?',
          description: 'Jeff Masters looks at the long-term effects of greenhouse emissions.',
          link: 'https://www.wunderground.com/cat6/Global-CO2-Emissions-Hit-All-Time-High-2018-Hothouse-Earth-our-Future?cm_ven=hp-slot-4',
          photo: 'globalwarming'
        },
        {
          title: 'How the Sun is Impacting Our Climate',
          description: 'Yes, the sun provides our heat. But no, the sun is not causing climate change.',
          link: 'http://bit.ly/2HdLSBj?cm_ven=hp-slot-5',
          photo: 'sun'
        }
      ],
      addArticle: false
    }
    this.handleEditArticle = this.handleEditArticle.bind(this);
    this.handleAddArticle = this.handleAddArticle.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  handleEditArticle(index, newArticle) {
    const newState = {...this.state}.masterArticleList;
    for (let key in newArticle) {
      if (newArticle[key]) {
        newState[index][key] = newArticle[key];
      }
    }
    this.setState({masterArticleList: newState});
  }

  toggleAdd() {
    const newState = {...this.state};
    newState.addArticle = !newState.addArticle;
    this.setState({addArticle: newState});
  }

  handleAddArticle(newArticle) {
    const newState = {...this.state}.kegList;
    newState.push(newArticle;
      this.setState({masterArticleList: newState});
  }

  render(){
    let Visible = null;
    let AddComponent = null;
    if (this.state.addArticle) {
      AddComponent= <AddArticle toggleAdd={this.toggleAdd} onAddArticle={this.handleAddArticle} />;
    } else {
      AddComponent = <button onClick={this.toggleAdd} style={ButtonStyle}>Add Article</button>;
    }
    if (this.props.canEdit) {
      Visible = <div>
        {this.state.masterArticleList.map((article, index) =>
          <Article title={article.title}
            description={article.description}
            photo={article.photo}
            link={article.link}
            index={index}
            editEnabled={this.props.editEnabled}
            onEditArticle={this.handleEditArticle}
            key={index}/>)}{AddComponent}
      </div>;
    }
    return (
      <div>
        <Conditions/>
        <SignUpHero/>
        {Visible}
      </div>
    );
  }
}

ArticleList.propTypes = {
  editEnabled: PropTypes.bool.isRequired,
  canEdit: PropTypes.bool.isRequired
}

export default ArticleList;
