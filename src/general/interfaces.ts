import React from "react";

export interface Item {
    title: string,
    Icon: React.FunctionComponent,
    route: string
}

export interface Notice {
    entityId: number,
    notificationData: NoticeData
}

export interface NoticeData {
    notificationId: number,
    recipientId: number,
    scheduledTime: string,
    entityName: string,
    notificationText: string
}