import React, {Component} from 'react';
import Categories from './Categories';
import CategorySnippet from './SideCategories/CategorySnippet';

class SideCategories extends Component {
    constructor(props){
        super(props);
        this.state={
            currentCategory:this.props.categories[0].name,
            categoryNames:this.props.categories.map( category => category.name),
            categories: this.props.categories,
            categoryName: this.props.categoryName
        }
        this.selectCategory = this.selectCategory.bind(this);
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.categoryName !== this.props.categoryName){
            this.setState({
                currentCategory:this.props.categories[0].name,
                categoryNames:this.props.categories.map( category => category.name),
                categories: this.props.categories,
                categoryName: this.props.categoryName
            })
        }
    }
    selectCategory (category) {
        this.setState({
            currentCategory:category
        })
    }
    render(){
        const {categoryNames, currentCategory, categories, categoryName} = this.state;
        const snippets = categories.filter( category =>  category.name ===currentCategory)[0]
            .projects.map( project => {
                return(
                    <CategorySnippet
                        img = {project.img}
                        title = {project.title}
                        funded = {project.funded}
                        key={`key_${categoryName}_${project.title}`}
                    />
                )
            })
        return(
            <div className='side-category'>
                <Categories
                    categories = {categoryNames}
                    callbackFn = {this.selectCategory}
                    currentCategory = {currentCategory}
                    categoryClass = 'side-category-button'
                />
                {snippets}
            </div>
        )
    }
}
export default SideCategories;