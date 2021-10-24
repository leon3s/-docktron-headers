export interface IUser {
  email?:string;
  username:string;
  id:string;
}

export interface IWebApp {
  id:string;
  ID: string;
  url:string;
  icon:string;
  load:string;
  name:string;
  userAgent:string;
  lastUpdateDate:Date;
  lastCreationDate:Date;
}

export interface IEventNotification {
  args: any;
  appId:string;
}

export interface IDockConfig {
  apps: IWebApp[];
}

export interface IEventNotificationCount {
  appId:string;
  number:number;
}
