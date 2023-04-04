import React, { useState } from 'react'
import "../css/ActuallyListeningBar.css"
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded' 
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import VolumeMuteRoundedIcon from '@mui/icons-material/VolumeMuteRounded'
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded'

const ActuallyListeningBar = () => {

  const [iconMute , setIconMute] = useState(false)
  const [value, setValue] = useState(30)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIconMute(false)
  };
  
  return (
    <div className='listening-bar'>
      <div className="listening-bar-container">
        <p>Actual music playing:</p>
        <p>Controller Bar</p>
        <div className='volume-bar'>
          <Stack direction="row" spacing={2}>
            <a href="#" style={{color: 'white'}} onClick={() => {iconMute ? setIconMute(false): setIconMute(true)}}>
              {!iconMute && (value == 0 ? <VolumeMuteRoundedIcon/>: value >= 50 ? <VolumeUpRoundedIcon/>: <VolumeDownRoundedIcon/>)}{iconMute && <VolumeOffRoundedIcon/>}
            </a>
            <Slider size='small' sx={{color: 'white'}} value={value} onChange={handleChange} aria-label="Default" valueLabelDisplay='auto'/>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default ActuallyListeningBar