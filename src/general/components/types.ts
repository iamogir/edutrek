export type HumanCardInfo = {
    id: number
    name: string,
    phoneNum: string,
    whatsApp?: string,
    email: string,
    location: string,
    courseAbbreviation: string
}

export type Notice = {
    entityId: number,
    notificationData: NoticeData
}

export type NoticeData = {
    notificationId: number,
    recipientId: number,
    scheduledTime: string,
    entityName: string,
    notificationText: string
}