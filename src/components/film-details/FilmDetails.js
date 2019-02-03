import React , { Component }from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FilmDetails extends Component {
    render() {
        const {selectedFilm} = this.props;
        var imageSource = 'https://static.addtoany.com/images/dracaena-cinnabari.jpg';
        if (selectedFilm.show.image && selectedFilm.show.image.medium)
            imageSource = selectedFilm.show.image.medium;
    //    const imageSource = ({selectedFilm.show.image} && {selectedFilm.show.image.original})? {selectedFilm.show.image.original} : 'https://static.addtoany.com/images/dracaena-cinnabari.jpg';
      return (
  <Card>
    <CardHeader
      title={selectedFilm.score}
      subtitle={selectedFilm.show.status}
      avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/2000px-Red_star.svg.png"
    />
    <CardMedia
      overlay={<CardTitle title={selectedFilm.show.name} subtitle={selectedFilm.show.language} />}
    >
     <img src={imageSource} alt="" />
    </CardMedia>
    <CardTitle title={selectedFilm.show.name.premiered} subtitle="summary" />
    <CardText>
    <div>
    {selectedFilm.show.summary}
    </div>
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);
}
}

export default FilmDetails;
