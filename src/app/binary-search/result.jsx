import { Button } from '@/components/ui/button';
import React, { Component } from 'react';
class Result extends Component {
    render() {
        return (
            <div className='flex flex-col items-center space-y-4'>
                <div className='bg-white rounded-lg p-6 shadow-md text-black'>
                    <span className='text-3xl display-3'>
                        Your number is {this.props.res}
                    </span>
                </div> <br />
                <Button
                    variant="outline"
                    className='text-black font-bold'
                    onClick={this.props.onRestart}
                >
                    Restart
                </Button>
            </div>
        );
    }
}

export default Result;