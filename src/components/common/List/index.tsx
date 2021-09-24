import React from 'react'
import ListFooter from './ListFooter'
import ListView from './ListView'

export interface CustomListProps {
  renderRow: (data: any, index: number) => void
  onEndReached?: () => void
  data: any[]
  ListFooterComponent?: JSX.Element
  ListEmptyComponent?: JSX.Element
  footerProps?: {
    footerText: string
    loading: boolean
  }
}

const CustomList: React.FC<CustomListProps> = ({ footerProps, ...props }) => {
  return (
    <ListView
      {...props}
      ListFooterComponent={
        footerProps && (
          <ListFooter
            loading={footerProps.loading}
            footerText={footerProps.footerText}
          />
        )
      }
    />
  )
}

export default CustomList
