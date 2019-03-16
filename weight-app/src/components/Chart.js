import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);

        this.state = {
            chartData: {
                labels:[],
                datasets:[
                    {
                        label: 'Weight History',
                        data:[]

                }]
            }
        }
        
    }

    render() {
        return (
            <div className='Chart'>
                <Line
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}

export default Chart;