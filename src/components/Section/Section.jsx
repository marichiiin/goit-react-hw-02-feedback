import { Component } from 'react';

export class Section extends Component {
    render () {
        const { children, title } = this.props;
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        )
    }
}