import React, {Component} from 'react';
import Guess from "./guess";
import Result from "./result";
import SearchVisualization from "./search-visualization";

class Search extends Component {
    render() {
        return (
            <div className="space-y-8 p-4 max-w-6xl mx-auto">
                <SearchVisualization 
                    upper={this.props.upper}
                    lower={this.props.lower}
                    max={this.props.max}
                />
                <div>
                    {this.props.upper !== this.props.lower &&
                    <Guess
                        yesButton={this.props.yesButton}
                        noButton={this.props.noButton}
                        upper={this.props.upper}
                        lower={this.props.lower}
                        max={this.props.max}
                    />
                    }
                    {this.props.upper === this.props.lower &&
                       <Result
                           res={this.props.upper}
                           onRestart={this.props.onRestart}
                       />
                    }
                </div>
            </div>
        );
    }

}

export default Search;