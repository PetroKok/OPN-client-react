import React, { Component } from 'react';
import HeadTitle from '../comp/HeadTitle'
import Title from '../comp/Title'
import CardsList from '../comp/CardsList'

class Tariff extends Component {
    render() {
        return (
            <div>
                <HeadTitle name="Tariffs" title="Tariff plans"/>
                <Title/>
                <CardsList/>
            </div>
        );
    }
}

export default Tariff;
