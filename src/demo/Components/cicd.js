import React, { memo, useState, useEffect } from 'react'
import { Button, Space, DatePicker, version } from 'antd'

import DrawerTimeline from './drawer-timeline'

const Cicd = memo(() => {
  const drawerTimelineJobUid = "5465464864841134658"
  const [currentStatus, setCurrentStatus] = useState("build")
  const [actions, setActions] = useState(["build", "sync", "deploy", "test"])

  const [openDrawerTimeline, setOpenDrawerTimeline] = useState(false)
  const [timelineItems, setTimelineItems] = useState([])

  const showDrawerTimeline = () => {
    setOpenDrawerTimeline(true)
  }

  const closeDrawerTimeline = () => {
    setOpenDrawerTimeline(false)
  }

  return (
    <div style={{ padding: '0 24px' }}>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary" onClick={showDrawerTimeline}>
          CICD Steps
        </Button>
      </Space>
      <DrawerTimeline jobUid={drawerTimelineJobUid} openDrawerTimeline={openDrawerTimeline} closeDrawerTimeline={closeDrawerTimeline} />
    </div>
  )
})

export default Cicd