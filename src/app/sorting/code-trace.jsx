import React from 'react';

const CodeTrace = ({ currentStep, totalSteps, algorithmCode, highlightedLines }) => {
  return (
    <div className="w-80 bg-gray-900 text-white p-4 space-y-4 border-l border-gray-700 overflow-y-auto max-h-96">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-cyan-400">Code Trace</h3>
        <div className="text-sm text-gray-400">
          Step: <span className="text-yellow-400 font-bold">{currentStep}</span> / {totalSteps}
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="text-xs text-gray-500 font-semibold">CODE:</div>
        <div className="bg-gray-800 p-3 rounded font-mono text-xs leading-relaxed">
          {algorithmCode.map((line, idx) => (
            <div
              key={idx}
              className={`${
                highlightedLines.includes(idx)
                  ? 'bg-yellow-900 text-yellow-100'
                  : 'text-gray-300'
              } px-2 py-0.5 rounded`}
            >
              <span className="text-gray-500 mr-2">{idx + 1}</span>
              {line}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-3 rounded space-y-1">
        <div className="text-xs text-gray-500 font-semibold">COMPARISONS</div>
        <div className="text-sm text-cyan-300 font-mono">{currentStep}</div>
      </div>
    </div>
  );
};

export default CodeTrace;
