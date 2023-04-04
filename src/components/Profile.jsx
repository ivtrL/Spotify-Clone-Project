import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '../css/ProfileNav.css'
import React from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

const Profile = () => {

  return (
    <div className="profile-nav">
      <div className="profile-nav-container">
        <Stack className="buttons" spacing={5} direction='row'>
          <a href="#" className="nav-before">
            <Tooltip title='Voltar'>
            <NavigateBeforeIcon/>
            </Tooltip>
          </a>
          <a href="" className="nav-next">
          <Tooltip title='Avançar'>
            <NavigateNextIcon/>
            </Tooltip>
          </a>
        </Stack>
        <div>Profile Button</div>
      </div>
    </div>
  )
}

export default Profile