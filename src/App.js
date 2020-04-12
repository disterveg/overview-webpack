import React from 'react';
import $ from 'jquery';

export default class App extends React.Component{
    componentDidMount() {
        $('<h1 />')
            .text('hello world jquery')
            .css({
                textAlign: 'center',
                color: 'blue'
            })
            .appendTo($('header'));
    }
    render() {
        return (
          <React.Fragment>
            <header></header>
    
            <hr />
    
            <div className="box">
              <h2 className="box-title">Box title</h2>
    
              <p className="box-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quibusdam repellat incidunt quas facilis obcaecati sunt doloribus perferendis voluptas quis!</p>
            </div>
          </React.Fragment>
        )
    }
}