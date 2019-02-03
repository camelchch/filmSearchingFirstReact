import React from 'react';
import propType from 'prop-types';
import { GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import FilmDetails from '../film-details/FilmDetails';

class ImageResults extends React.Component {
    state = {
        seleted: this.props.choosen,
        choosenFilm:[],
    }

    handleClick = img => {
        this.setState({ seleted: true, choosenFilm: img });
    }

    render() {
        let imageListContent;
        const {images} = this.props;

        if (images) {
            imageListContent = (
                <GridList cols={6}>
                    {images.map(img => (
                        <GridTile
                            title = {img.show.name}
                            key = {img.show.id}
                            subtitle={
                                <span>
                                    type <strong>{img.show.type}</strong>
                                </span>
                            }
                            actionIcon = {
                            <IconButton onClick={() => this.handleClick(img)} >
                                    <ZoomIn color="white" />
                                </IconButton>
                            }
                            >
                        <img src={(img.show.image && img.show.image.medium)? img.show.image.medium : 'https://static.addtoany.com/images/dracaena-cinnabari.jpg'} alt="" />
                        </GridTile>
                    ))}
                </GridList>
            )
        } else {
            imageListContent = null;
        }

        if (!this.state.seleted)
        {
            return (
                <div>
                 {imageListContent}
                </div>
            )
    } else {
        return ( <div><FilmDetails selectedFilm={this.state.choosenFilm} /> </div>)
    }
}

}


ImageResults.propType = {
    images: propType.array.isRequired
}

export default ImageResults;
