'use client';

import React, { useState } from 'react';
import * as echarts from 'echarts';
import UpdateScoresModal from './UpdateScoresModal';

const QuestionAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [correctCount, setCorrectCount] = useState(10); // Default correct value
  const totalQuestions = 15; // Fixed total questions
  const incorrectCount = totalQuestions - correctCount;

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const updatePercentile = (newCorrectCount) => {
    setCorrectCount(newCorrectCount);
  };

  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const options = {
      tooltip: { trigger: 'item' },
      series: [
        {
          name: 'Question Analysis',
          type: 'pie',
          radius: '50%',
          data: [
            { value: correctCount, name: 'Correct', itemStyle: { color: '#4CAF50' } },
            { value: incorrectCount, name: 'Incorrect', itemStyle: { color: '#F44336' } },
          ],
        },
      ],
    };

    chart.setOption(options);

    return () => chart.dispose();
  }, [correctCount, incorrectCount]);

  return (
    <div className="bg-green-50 p-4 rounded-lg">
      <h2 className="text-lg font-semibold">Question Analysis</h2>
      <div ref={chartRef} style={{ width: '100%', height: 200 }}></div>
   
      {showModal && (
        <UpdateScoresModal
          closeModal={closeModal}
          updatePercentile={(newCorrect) => {
            updatePercentile(newCorrect);
          }}
        />
      )}
    </div>
  );
};

export default QuestionAnalysis;
