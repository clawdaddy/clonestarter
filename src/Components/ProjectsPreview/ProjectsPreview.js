import React, {Component} from 'react';
import Categories from './Categories';
import FeaturedProject from './FeaturedProject';

class ProjectsPreview extends Component {
    constructor(){
        super();
        this.state = {
            categories:['Food & Craft', 'Comics & Illustration', 'Publishing', 'Games', 'Design & Tech', 'Music', 'Arts', 'Film'],
            currentCategory:'Food & Craft'
        }
        this.selectCategory = this.selectCategory.bind(this);
    }
    selectCategory (category) {
        this.setState({
            currentCategory:category
        })
    }
    render(){
        const {categories, currentCategory} = this.state;
        return(
            <div>
                <Categories
                    categories = {categories}
                    callbackFn = {this.selectCategory}
                    currentCategory = {currentCategory}
                />
                <h2>{currentCategory}</h2>
                <FeaturedProject/>
                

            </div>
        )
    }
}

export default ProjectsPreview;