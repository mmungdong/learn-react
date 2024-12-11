import React, { memo, useState, useEffect } from 'react'
import { Drawer, Timeline } from 'antd'

const DrawerTimeline = memo((props) => {
  const { jobUid, openDrawerTimeline, closeDrawerTimeline } = props
  const [timelineItems, setTimelineItems] = useState([])
  const [timelineLoading, setTimelineLoading] = useState(true)
  const [currentStatus, setCurrentStatus] = useState("")
  const [jobUpdateTime, setJobUpdateTime] = useState("")
  const [timelinePengding, setTimelinePengding] = useState(true)

  useEffect(() => {
    const items = []
    if (jobUid) {
      getJobInfo().then(res => {
        console.log("res", res)
        setCurrentStatus(res.status)
        setJobUpdateTime(res.updateTime)
        items.push({
          label: "2024 10:12:00",
          children: "job创建成功",
        })
        if (res.status.includes("finished")) {
          timelinePengding(false)
        }
      })
      
      items.push({
        label: "2024 10:12:00",
        children: "创建job",
      })
      items.push({
        label: "2024 10:12:30",
        children: "sync",
      })
      items.push({
        label: "2024 10:13:00",
        children: "deploy",
      })
      items.push({
        label: "2024 10:14:00",
        children: "test",
      })
      setTimelineItems(items)
      setTimelineLoading(false)
      if (currentStatus.includes("finished")) {
        timelinePengding(false)
      }
    }
  }, [jobUid])

  useEffect(() => {
    if (openDrawerTimeline) {
    }
  }, [openDrawerTimeline])

  return (
    <>
      <Drawer
          closable
          destroyOnClose
          title={<p>CICD Steps</p>}
          placement="right"
          open={openDrawerTimeline}
          loading={timelineLoading}
          onClose={() => closeDrawerTimeline() }
        >
        <b>
          <span>
            当前 job 状态: {currentStatus}
          </span>
          <br/>
          <span>
            更新时间: {jobUpdateTime}
          </span>
        </b>
        <br/><br/><br/>
        <Timeline
          mode="left"
          pending={true}
          items={timelineItems}
        />
      </Drawer>
    </>
  );
});

export default DrawerTimeline;