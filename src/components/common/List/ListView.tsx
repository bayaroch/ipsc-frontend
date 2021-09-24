import React from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

import { Box } from '@material-ui/core'
import { CustomListProps } from '.'

const getEmptyContainer = (ListEmptyComponent: JSX.Element | undefined) => {
  if (ListEmptyComponent)
    return React.isValidElement(ListEmptyComponent) ? ListEmptyComponent : null
  return null
}

const getFooterContainer = (ListFooterComponent: JSX.Element | undefined) => {
  if (ListFooterComponent)
    return React.isValidElement(ListFooterComponent)
      ? ListFooterComponent
      : null
  return null
}

const ListView: React.FC<CustomListProps> = ({
  renderRow,
  onEndReached,
  data,
  ListFooterComponent,
  ListEmptyComponent,
  ...rest
}) => {
  onEndReached && useBottomScrollListener(onEndReached)

  return (
    <Box {...rest}>
      {data.length > 0
        ? data.map((item, index) => renderRow(item, index))
        : getEmptyContainer(ListEmptyComponent)}
      {getFooterContainer(ListFooterComponent)}
    </Box>
  )
}

export default ListView
