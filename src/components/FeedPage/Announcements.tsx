import { announcementsType } from '@/types/interface'
import TimeAgo from 'react-timeago'
import React from 'react'

interface AnnouncementsProps {
  announcements: announcementsType[]
}
interface AnnouncementProps {
  announcement: announcementsType
}

const Announcement: React.FC<AnnouncementProps> = ({ announcement }) => {
  return (
    <div className="bg-sky-100 p-4 rounded-lg my-10">
      <p className="text-lg font-semibold">{announcement.title}</p>
      <p>{announcement.content}</p>
      <TimeAgo date={announcement.submittedAt} className="mt-4 font-semibold" />
    </div>
  )
}

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <div className="mt-14 mx-10 w-full text-purple_main">
      <p className="text-xl font-semibold">Announcements</p>
      <p className="font-light md:text-md">
        Official announcements from Fullyhacks team
      </p>
      {announcements.map((announcement: announcementsType) => {
        return (
          <Announcement key={announcement.id} announcement={announcement} />
        )
      })}
    </div>
  )
}

export default Announcements
