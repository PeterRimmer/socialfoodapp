import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    renderIngredients() {
        const { library, expanded } = this.props;

        if (expanded) {
            var string= [<Text key={-1} style={{ paddingLeft: 10 }}>Ingredients:</Text>]; 
            for(var i=0 ; i<library.Ingredients.length ; i++) {
                string.push(
                    <Text key={i} style={{ flex: 1, paddingLeft: 20 }}>{library.Ingredients[i]}</Text>
                );
            }
            return (
                string
            );
        }
    }

    renderSteps() {
        const { library, expanded } = this.props;

        if (expanded) {
            var string= [<Text key={-1} style={{ paddingLeft: 10 }}>Method:</Text>]; 
            for(var i=0 ; i<library.Steps.length ; i++) {
                string.push(
                    <Text key={i} style={{ flex: 1, paddingLeft: 20 }}>{library.Steps[i]}</Text>
                );
            }
            console.log("--RENDER STEPS FUNCTION----");
            return (
                string
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, RecipeName } = this.props.library;
        //console.log(this.props);
        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {RecipeName}
                        </Text>
                    </CardSection>
                    {this.props.library.Ingredients ? this.renderIngredients() : null}
                    {this.props.library.Steps ? this.renderSteps() : null}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) =>  {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded } ;
};

export default connect(mapStateToProps, actions)(ListItem);
