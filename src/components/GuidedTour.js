import Joyride from 'react-joyride';
import React from 'react';

export class GuidedTour extends React.Component {
  state = {
    steps: [
      {
            content: <h2>Welcome to SubPlayer :) Let's begin our journey!</h2>,
            locale: { skip: <strong aria-label="skip">Skip</strong> },
            placement: 'center',
            target: 'body',
      },
      {
        target: '.video',
        content: 'This is the video player. All your imported / uploaded videos will be playing here. Pause and play by just clicking in the video or hitting the spacebar !',
        placement: 'bottom',
      },      
      {
        target: '.import-vid',
        content: 'Import your videos + captions directly through a YouTube URL here !',
        placement: 'left',
      },
      {
        target: '.file',
        content: 'Or upload videos and captions directly from your computer !',
      },
      {
        target: '.export',
        content: 'Export your captions in SRT, ASS or VTT format.',
        placement: 'left',
      },
      {
        target: '.translate',
        content: 'Translate your captions from English to any other Indian Language',
        placement: 'left',
      },
      {
        target: '.subtitles',
        content: 'Directly edit the text of your subtitles by typing in the boxes here',
        placement: 'left',
      },
      {
        target: '.progress',
        content: 'You can find the timeline here. Drag and drop the subtitle boxes to your liking !',
        placement: 'top',
      },
    ]
  };

  render () {
    const { steps } = this.state;

    return (
      <div className="tour">
        <Joyride
          continuous={true}
          steps={steps}
          showProgress={true}
          showSkipButton={true}
        />
        
      </div>
    );
  }
}