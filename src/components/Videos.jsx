import { Box, Stack } from '@mui/material'
import React from 'react'
import {ChannelCard,VideoCard} from '../components'

function Videos({videos}) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {videos?.map((item,idx) => (
        <Box key={idx}>
          {item?.id.videoId && <VideoCard video={item} snippet={item.snippet} /> }
          {item?.id.channelId && <ChannelCard channelDetail={item} /> }
        </Box>
      ))}
    </Stack>
  )
}

export default Videos