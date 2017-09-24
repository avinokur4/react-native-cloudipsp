import React from 'react';
import {
    View,
    Text
} from 'react-native';

import CardLayout from './card-layout';
import CardInputNumber from './card-field-number';
import CardInputExpMm from './card-field-exp-mm';
import CardInputExpYy from './card-field-exp-yy';
import CardInputCvv from './card-field-cvv';

export class CardInput extends React.Component {
    constructor(props) {
        super(props);
    }

    getCard = () => {
        return this.refs.cardLayout.getCard();
    }

    showCard = (card) => {
        this.refs.cardLayout.showCard(card);
    }

    test = () => {
        this.refs.cardLayout.test();
    }

    focus = () => {
        this.refs.inputNumber.focus();
    }

    render() {
        return (
            <CardLayout
                ref='cardLayout'
            >
                <Text
                    style={this.props.textStyle}
                    onPress={this.props.debug?this.test:undefined}>
                    Card Number:
                </Text>
                <CardInputNumber
                    ref="inputNumber"
                    onSubmitEditing={() => {
                        this.refs.inputMm.focus();
                    }}
                    style={this.props.textInputStyle}
                />
                <Text style={this.props.textStyle}>Expiry:</Text>
                <View style={{flexDirection: 'row'}}>
                    <CardInputExpMm
                        ref="inputMm"
                        placeholder='MM'
                        onSubmitEditing={() => {
                            this.refs.inputYy.focus();
                        }}
                        style={[{flex: 1}, this.props.textInputStyle]}
                    />
                    <CardInputExpYy
                        ref="inputYy"
                        placeholder='YY'
                        onSubmitEditing={() => {
                            this.refs.inputCvv.focus();
                        }}
                        style={[{flex: 1}, this.props.textInputStyle]} />
                </View>
                <Text style={this.props.textStyle}>CVV:</Text>
                <CardInputCvv
                    ref="inputCvv"
                    onSubmitEditing={() => {
                        if (this.props.onCompletion != undefined) {
                            this.props.onCompletion(this);
                        }
                    }}
                    style={this.props.textInputStyle}
                />
            </CardLayout>
        );
    }
}
