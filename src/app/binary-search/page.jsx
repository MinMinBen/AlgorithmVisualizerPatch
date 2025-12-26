"use client";
import React, { Component } from 'react';
import EntryPoint from "./entryPoint";
import Search from "./search";
import Navbar from '@/components/navbar';
import StreakBadge from '@/components/streak-badge';
import { PresetSelector } from '@/components/preset-selector';

class BinarySearch extends Component {
    state = {
        upper: 100,
        lower: 0,
        max: 100,
        isRunning: false
    }
    render() {
        return (
            <div className="algo-page-wrapper min-h-screen">
                <Navbar title={"Binary Search"} />
                <div className="flex items-center justify-center min-h-[68vh] px-4">
                    {!this.state.isRunning && (
                        <div className="max-w-4xl w-full mx-auto text-xl">
                            <div className="bg-white rounded-lg p-16 shadow-md space-y-6">
                                <PresetSelector 
                                    algorithmName="binary-search"
                                    onPresetSelect={this.handlePresetSelect}
                                    className="mb-2"
                                />
                                <EntryPoint
                                    startGame={this.handleStartGame}
                                    upper={this.state.upper}
                                    setUpper={this.handleSetUpper}
                                />
                            </div>
                        </div>
                    )}
                    {this.state.isRunning &&
                        <Search
                            yesButton={this.handleYes}
                            noButton={this.handleNo}
                            upper={this.state.upper}
                            lower={this.state.lower}
                            max={this.state.max}
                            onRestart={this.handleRestart}
                        />
                    }
                </div>
            </div>
        );
    }
    
    handlePresetSelect = (preset) => {
        this.setState({
            upper: preset.upper,
            lower: preset.lower,
            max: preset.max
        });
    }
    
    handleStartGame = () => {
        this.setState({ isRunning: true });
    }
    handleRestart = () => {
        this.setState({ isRunning: false, upper: 100, lower: 0 });
    }
    handleYes = () => {
        const mid = Math.floor((this.state.upper + this.state.lower) / 2);
        this.setState({ lower: mid + 1 });
    }
    handleNo = () => {
        // set upper to mid for correct inclusive narrowing
        const mid = Math.floor((this.state.upper + this.state.lower) / 2);
        this.setState({ upper: mid });
    }
    handleSetUpper = (up) => {
        let val = parseInt(up);
        if (val <= 0) {
            val = 100;
        }
        this.setState({ upper: val, max: val });
    }
}

export default BinarySearch;