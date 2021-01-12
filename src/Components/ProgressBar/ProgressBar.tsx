import React from 'react';
import './ProgressBar.css';
type ProgressProps = {
  questionsLength: number;
  answersLength: number;
};


let ProgressBar = (props: ProgressProps) => {
  let percentage = Math.ceil(
    (props.answersLength / props.questionsLength) * 100);

  return (
    <section className='progress-bar-section'>
    <section className='progress-bar' style={{width : percentage, backgroundColor: '#a94460', marginLeft: 'auto', marginRight: 'auto'}}>
        %Complete
      </section>
    </section>
  );
};

export default ProgressBar;
