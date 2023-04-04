import React, { useState } from 'react'
import '../css/ProfileNav.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Stack from '@mui/material/Stack'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

const Profile = () => {
  
  const [anchorEl, setAnchorEl] = useState({popover1: null, popover2: null})

  const handlePopover1Open = (event) => {
    setAnchorEl({popover1: event.currentTarget})
  }

  const handlePopover1Close = () => {
    setAnchorEl({popover1: null})
  }

  const handlePopover2Open = (event) => {
    setAnchorEl({popover2: event.currentTarget})
  }

  const handlePopover2Close = () => {
    setAnchorEl({popover2: null})
  }

  const open = [Boolean(anchorEl.popover1), Boolean(anchorEl.popover2)]

  return (
    <div className="profile-nav">
      <div className="profile-nav-container">
        <Stack className="buttons" spacing={5} direction='row'>
          <a href="#" className="nav-before" onMouseEnter={handlePopover1Open} onMouseLeave={handlePopover1Close}>
            <NavigateBeforeIcon/>
          </a>
          <Popover
          sx={{ pointerEvents: 'none'}}
          open={open[0]}
          anchorEl={anchorEl.popover1}
          onClose={handlePopover1Close}
          disableRestoreFocus
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',}}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'}}>
          
          <Typography sx={{ p: 1, backgroundColor: 'black', color: 'white' }}>Voltar</Typography>
          
          </Popover>
          <a href="" className="nav-next" onMouseEnter={handlePopover2Open} onMouseLeave={handlePopover2Close}>
            <NavigateNextIcon/>
            <Popover
          sx={{ pointerEvents: 'none'}}
          open={open[1]}
          anchorEl={anchorEl.popover2}
          onClose={handlePopover2Close}
          disableRestoreFocus
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',}}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'}}>
          
          <Typography sx={{ p: 1, backgroundColor: 'black', color: 'white'  }}>Avançar</Typography>
          
          </Popover>
          </a>
        </Stack>
        <div>Profile Button</div>
      </div>
    </div>
  )
}

export default Profile