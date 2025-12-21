import React, { Component } from 'react';

class SearchVisualization extends Component {
    render() {
        const { upper, lower, max } = this.props;
        const mid = Math.floor((upper + lower) / 2);
        
        // Create array of numbers from 0 to max
        const numbers = Array.from({ length: max + 1 }, (_, i) => i);
        
        return (
            <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Binary Search Visualization</h3>
                
                {/* Search Range Display */}
                <div className="mb-8">
                    <div className="text-sm text-gray-600 mb-2">Search Range: {lower} to {upper}</div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-green-600">Lower: {lower}</span>
                        <span className="text-sm font-semibold text-blue-600">Mid: {mid}</span>
                        <span className="text-sm font-semibold text-red-600">Upper: {upper}</span>
                    </div>
                </div>

                {/* Number Line Visualization */}
                <div className="mb-8 overflow-x-auto">
                    <div className="flex gap-1 min-w-full p-4 bg-white rounded border border-gray-300">
                        {numbers.map((num) => (
                            <div key={num} className="flex flex-col items-center">
                                <div
                                    className={`
                                        w-8 h-12 flex items-center justify-center rounded font-bold text-sm
                                        transition-all duration-300
                                        ${num === mid 
                                            ? 'bg-blue-500 text-white scale-110' 
                                            : num < lower || num > upper
                                            ? 'bg-gray-300 text-gray-500'
                                            : num < mid
                                            ? 'bg-green-200 text-green-800'
                                            : 'bg-red-200 text-red-800'
                                        }
                                    `}
                                >
                                    {num}
                                </div>
                                {num === mid && (
                                    <div className="text-xs text-blue-600 font-bold mt-1">MID</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Algorithm Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded border border-green-200">
                        <div className="text-xs text-gray-600 mb-1">ACTIVE RANGE</div>
                        <div className="text-2xl font-bold text-green-600">{upper - lower + 1}</div>
                        <div className="text-xs text-gray-500">elements</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded border border-blue-200">
                        <div className="text-xs text-gray-600 mb-1">CURRENT GUESS</div>
                        <div className="text-2xl font-bold text-blue-600">{mid}</div>
                        <div className="text-xs text-gray-500">mid value</div>
                    </div>
                </div>

                {/* Code Trace */}
                <div className="bg-gray-900 text-white p-4 rounded font-mono text-xs">
                    <div className="text-cyan-400 font-bold mb-2">Algorithm:</div>
                    <div className="space-y-1 text-gray-300">
                        <div>1. mid = floor((lower + upper) / 2)</div>
                        <div className="text-yellow-300">   → mid = floor(({lower} + {upper}) / 2) = {mid}</div>
                        <div className="mt-2">2. If target &gt; mid:</div>
                        <div className="text-gray-500">   lower = mid + 1</div>
                        <div className="mt-2">3. If target &lt; mid:</div>
                        <div className="text-gray-500">   upper = mid - 1</div>
                        <div className="mt-2">4. Repeat until lower == upper</div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="mt-6 p-4 bg-gray-100 rounded">
                    <div className="text-sm text-gray-700">
                        <span className="font-semibold">Complexity:</span> O(log n) 
                        <span className="ml-6 font-semibold">Estimated steps:</span> {Math.ceil(Math.log2(max))}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchVisualization;
