import React, { useState } from 'react'
import "../css/ActuallyListeningBar.css"
import { Slider, Stack } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const ActuallyListeningBar = () => {

  const [volumeValue, setVolumeValue] = useState(30)

  return (
    <div className='listening-bar'>
      <div className="listening-bar-container">
        <p>Actual music playing:</p>
        <p>Controller Bar</p>
        <div className='volume-bar'>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            {volumeValue == 50 ? <VolumeUp />: <VolumeDown/>}
            <Slider sx={{color: 'white'/*,'& .MuiSlider-thumb': {borderRadius: '10px', transform: 'scale(0.1rem)'}*/}} value={volumeValue} aria-label="Default" valueLabelDisplay='auto'/>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default ActuallyListeningBar