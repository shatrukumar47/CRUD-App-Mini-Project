import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <div>
        <div style={{width:"90%", margin:"auto"}}>
        <Box bg='white'>
            <SkeletonCircle size='40' mt='10' />
            <SkeletonText mt='10' noOfLines={6} spacing='10' skeletonHeight='5' />
        </Box>
        </div>
        <Box bg='white'>
            <SkeletonText mt='10' noOfLines={1} spacing='0' skeletonHeight='40' />
        </Box>
    </div>
  )
}

export default Loading;